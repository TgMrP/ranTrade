<template>
  <div class="branches">
    <h3>הסניפים שלנו</h3>
    <ul>
      <li>חיפה - ההסתדרות 52. טלפון 076-599-4537</li>
      <li>גלילות - פי גלילות רמת השרון. טלפון 076-599-4537</li>
      <li>חולון - המלאכה 30. טלפון 076-599-4537</li>
      <li>פתח תקווה - יצחק רבין 5. טלפון 076-599-4537</li>
      <li>ראשל”צ - סחרוב 7. טלפון 076-599-4537</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterBranches',
}
</script>

<style lang="scss" scoped>
.branches {
  @apply text-center lg:text-right;
  h3 {
    font-size: 34px;
    line-height: 1.5;
    letter-spacing: -0.8px;
    color: #1a3142;
  }

  ul {
    li {
      font-size: 16px;
      line-height: 1.75;
      letter-spacing: -0.4px;
      color: #707070;
    }
  }
}
</style>
