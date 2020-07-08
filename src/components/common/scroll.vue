<style scoped>
    .loading-more{
        line-height:3;
        text-align:center;
    }
</style>
<template>
	<div v-infinite-scroll="loadMore" infinite-scroll-disabled="noMore" infinite-scroll-distance="15" class="loading-more f28 c-666">{{ajaxing ? '努力加载中...': (noMore ? '我是有底线滴~' :'')}}</div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll'
import {mapState} from 'vuex'
export default{
	props:['noMore'],
    directives: {
        infiniteScroll
    },
    computed: mapState({
      ajaxing: state => state.ajaxing
    }),
    methods:{
        loadMore:function(){
            this.$emit('loadMore')
        }
    }
}	
</script>