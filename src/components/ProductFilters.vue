<template>
  <form>
    <div id="selection">
      <h2>FILTERS</h2>
      <div>
        <input type="checkbox" id="hat" name="hat" value="hat" class="checkmark">
        <label for="hat">HATS</label>
      </div>
      <div>
        <input type="checkbox" id="sweater" name="sweater" value="sweater" class="checkmark">
        <label for="sweater">SWEATERS</label>
      </div>
      <div>
        <input type="checkbox" id="boots" name="boots" value="boots" class="checkmark">
        <label for="boots">BOOTS</label>
      </div>
      <div>
        <input type="checkbox" id="bottle" name="bottle" value="bottle" class="checkmark">
        <label for="bottle">BOTTLES</label>
      </div>
      <div>
        <input type="checkbox" id="dogs" name="dogs" value="dogs" class="checkmark">
        <label for="dogs">DOGS</label>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ProductFilters"
}
</script>

<style scoped>
form{
  margin-top: 5rem;
  margin-right: 2rem;
}
</style>