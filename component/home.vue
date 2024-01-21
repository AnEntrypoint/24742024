<template>
  <div class="bg-neutral-50 py-6 px-6 text-center dark:bg-neutral-900">
    <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
      {{ title }}
    </h1>
  </div>
  <div v-for="member in members" class="card card-image-cover m-4">
    <div class="card-body">
      <h2 class="card-header">{{ member.pseudonym }}</h2>
      <p class="text-content2">{{ member.ERC20 }}</p>
      <div class="card-footer">
        <router-link v-bind:to="'/member/' + member.id">
          <button class="btn-secondary btn">Learn More</button>
        </router-link>

      </div>
    </div>
    <img v-bind:src="member.pfpUrl" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Members',
      members: []
    }
  },
  created() {
    this.start()
  },
  methods: {
    async start() {
      const items = [];
      let page = 0;
      while (true) {
        const list = await pb.collection('members').getList(++page, 500);
        console.log(list.items.length)
        for (let index in list.items) {
          list.items[index].pfpUrl = pb.files.getUrl(list.items[index], list.items[index].pfp)
          items.push(list.items[index])
        }
        if (list.items.length < 500) break;
      }
      console.log(items)
      this.members = items;
    }
  }
}
</script>

<style>
.title {
  color: blue;
}
</style>