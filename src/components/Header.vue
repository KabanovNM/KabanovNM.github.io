<template>
  <div class="header">
    <div class="header__company">
      <img
        src="../assets/img/icons/logo.svg"
        alt="logo"
      />
      <p class="header__company-name">система таблиц</p>
    </div>
    <User :user="currentUser" />
  </div>
</template>

<script>
import User from './User';

export default {
  name: 'Header',
  components: {
    User,
  },
  data: () => {
    return {
      currentUser: {
        name: 'Светлана',
        avatarUrl: 'current-user',
        job: 'Сотрудник',
      },
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: #fff;
}

.header .header__company {
  display: flex;
  align-items: center;
}

.header .header__company .header__company-name {
  width: 90px;
  margin-left: 10px;
  text-align: start;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  color: var(--color-primary);
}
</style>
