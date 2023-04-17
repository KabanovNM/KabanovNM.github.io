<template>
  <div>
    <Header />

    <div class="wrapper">
      <h1 class="title">Список заявлений</h1>
      <SearchInput
        v-model="searchQuery"
        class="search"
        @input="handleSearchInput"
      />
      <div class="table-wrapper">
        <Table
          :columns="columns"
          :rows="filterUsers"
          :sorting="sorting"
          class="table"
          @toggle-sort="toggleSort"
        />
      </div>
      <MobileTable
        :columns="columns"
        :rows="filterUsers"
        :sorting="sorting"
        class="mobile-table"
        @toggle-sort="toggleSort"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Table from '@/components/Table/index.vue';
import SearchInput from '@/components/SearchInput.vue';
import MobileTable from '@/components/MobileTable/index.vue';
import { getLocalStorageItem, setLocalStorageItem } from '@/helpers/locakStorage';
import { SEARCH_QUERY_USER_TABLE, SORT_QUERY_USER_TABLE, SUBJECT_KEYS } from '@/constants/common';

export default {
  name: 'Crm',
  components: {
    MobileTable,
    Header,
    Table,
    SearchInput,
  },
  data: () => {
    return {
      users: [
        {
          id: 1,
          name: 'Соколова София Михайловна',
          date: '2023-01-25',
          subjects: [
            {
              subject: 'Русский язык',
              score: '4.3',
            },
            {
              subject: 'Математика',
              score: '4',
            },
            {
              subject: 'Информатика',
              score: '5',
            },
          ],
        },
        {
          id: 2,
          name: 'Павлов Владислав Эминович',
          date: '2023-02-24',
          subjects: [
            {
              subject: 'Русский язык',
              score: '5',
            },
            {
              subject: 'Математика',
              score: '4',
            },
            {
              subject: 'Информатика',
              score: '5',
            },
          ],
        },
        {
          id: 3,
          name: 'Филиппов Семён Глебович',
          date: '2023-01-22',
          subjects: [
            {
              subject: 'Русский язык',
              score: '4',
            },
            {
              subject: 'Математика',
              score: '3',
            },
            {
              subject: 'Информатика',
              score: '5',
            },
          ],
        },
        {
          id: 4,
          name: 'Щукина Мария Викторовна',
          date: '2023-03-20',
          subjects: [
            {
              subject: 'Русский язык',
              score: '4.2',
            },
            {
              subject: 'Математика',
              score: '4.5',
            },
            {
              subject: 'Информатика',
              score: '4.5',
            },
          ],
        },
        {
          id: 5,
          name: 'Потапова Вера Михайловна',
          date: '2023-01-21',
          subjects: [
            {
              subject: 'Русский язык',
              score: '3',
            },
            {
              subject: 'Математика',
              score: '5',
            },
            {
              subject: 'Информатика',
              score: '4',
            },
          ],
        },
        {
          id: 6,
          name: 'Ефремова Стефания Максимовна',
          date: '2023-02-02',
          subjects: [
            {
              subject: 'Русский язык',
              score: '4',
            },
            {
              subject: 'Математика',
              score: '4',
            },
            {
              subject: 'Информатика',
              score: '3',
            },
          ],
        },
        {
          id: 7,
          name: 'Сычев Василий Михайлович',
          date: '2023-02-02',
          subjects: [
            {
              subject: 'Русский язык',
              score: '4.3',
            },
            {
              subject: 'Математика',
              score: '4.8',
            },
            {
              subject: 'Информатика',
              score: '5',
            },
          ],
        },
        {
          id: 8,
          name: 'Соколова Полина Арсентьевна',
          date: '2023-01-29',
          subjects: [
            {
              subject: 'Русский язык',
              score: '4',
            },
            {
              subject: 'Математика',
              score: '3',
            },
            {
              subject: 'Информатика',
              score: '3',
            },
          ],
        },
        {
          id: 9,
          name: 'Шаповалов Артемий Сергеевич',
          date: '2023-01-20',
          subjects: [
            {
              subject: 'Русский язык',
              score: '5',
            },
            {
              subject: 'Математика',
              score: '5',
            },
            {
              subject: 'Информатика',
              score: '5',
            },
          ],
        },
        {
          id: 10,
          name: 'Александрова Милана Тимуровна',
          date: '2023-01-31',
          subjects: [
            {
              subject: 'Русский язык',
              score: '4.5',
            },
            {
              subject: 'Математика',
              score: '3',
            },
            {
              subject: 'Информатика',
              score: '3',
            },
          ],
        },
      ],
      columns: [
        {
          key: 'name',
          type: 'string',
          name: 'ФИО',
          align: 'start',
          width: 'auto',
        },
        {
          key: 'date',
          type: 'date',
          name: 'Дата подачи заявления',
          width: '185px',
        },
        {
          key: 'russianLanguage',
          type: 'subject',
          name: 'Балл по русскому',
          width: '150px',
        },
        {
          key: 'mathematics',
          type: 'subject',
          name: 'Балл по математике',
          width: '165px',
        },
        {
          key: 'computerScience',
          type: 'subject',
          name: 'Балл по информатике',
          width: '176px',
        },
        {
          key: 'total',
          type: 'total',
          name: 'Суммарный балл',
          width: '149px',
        },
        {
          key: 'passedPercent',
          type: 'graph',
          name: 'Процент',
          align: 'center',
          width: '99px',
        },
      ],
      searchQuery: '',
      defaultSort: null,
      sorting: {},
    };
  },
  computed: {
    filterUsers() {
      if (this.searchQuery) {
        return this.formattedUsers.filter((user) =>
          user.name.toLowerCase().includes(this.searchQuery.trim().toLowerCase())
        );
      }

      return this.formattedUsers;
    },
    formattedUsers() {
      return this.users.map((user) => {
        const totalScore = user.subjects.reduce(
          (acc, subject) => (acc += Number(subject.score)),
          0
        );
        const passedPercent = +((totalScore * 100) / (user.subjects.length * 5)).toFixed(0);
        const subject = user.subjects.reduce((acc, subject) => {
          return {
            ...acc,
            [SUBJECT_KEYS[subject.subject]]: Number(subject.score),
          };
        }, {});

        return {
          ...user,
          ...subject,
          total: totalScore,
          passedPercent,
        };
      });
    },
  },
  created() {
    const query = getLocalStorageItem(SEARCH_QUERY_USER_TABLE);
    const sort = getLocalStorageItem(SORT_QUERY_USER_TABLE);

    this.searchQuery = query || '';
    this.sorting = sort || { by: 'name', asc: true };
  },
  methods: {
    handleSearchInput(query) {
      setLocalStorageItem(SEARCH_QUERY_USER_TABLE, query);
    },
    toggleSort(sorting) {
      this.sorting = { ...sorting };
      setLocalStorageItem(SORT_QUERY_USER_TABLE, sorting);
    },
  },
};
</script>

<style scoped>
.title {
  width: max-content;
}

.wrapper {
  padding: 48px 60px 60px;
}

.search {
  margin-top: 20px;
}

.table-wrapper {
  overflow-x: auto;
}

.table-wrapper::-webkit-scrollbar {
  height: 6px;
}

.table-wrapper::-webkit-scrollbar-track {
  background-color: transparent;
}

.table-wrapper::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: var(--color-border);
}

.table {
  min-width: 1200px;
}

.mobile-table {
  display: none;
  margin-top: 16px;
}

@media screen and (max-width: 767px) {
  .wrapper {
    padding: 20px 12px;
  }

  .search {
    margin-top: 16px;
  }

  .table {
    display: none;
  }

  .mobile-table {
    display: block;
  }
}
</style>
