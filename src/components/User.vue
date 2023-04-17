<template>
  <div class="user">
    <span class="user__description">
      <p class="user__description-name">{{ user.name }}</p>
      <p class="user__description-job">{{ user.job }}</p>
    </span>
    <img
      :src="require(`../assets/img/user-avatars/${user.avatarUrl}.webp`)"
      alt="avatar"
      class="user__avatar"
    />
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user {
  display: flex;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
}

.user .user__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: end;
}

.user .user__description .user__description-name {
  font-weight: 700;
  color: var(--color-primary);
}

.user .user__description .user__description-job {
  font-weight: 400;
  text-align: right;
  color: var(--color-text-light);
}

.user .user__avatar {
  width: 44px;
  height: 44px;
  margin-left: 8px;
}
</style>
