<style>
.time-down {
  display: inline-block;
}

</style>
<template>
  <div class="count-down">
    {{label}}<div class="time-down" v-html="$options.filters.remainDateFormat(remainTime,mode)"></div>
  </div>
</template>
<script>
import { remainDateFormat } from 'utils/filter'
export default {
  props: {
    label: {
      type:String,
      default: ''
    },
    endTime: {
      type: Number,
      default: 0
    },
    localTime: {
      type: Number,
      default: 0
    },
    mode:{
      type:String,
      default: 'html'
    }
  },
  data() {
    return {
      show: false,
      timer: '',
      remainTime: '',
    }
  },
  created() {
    this.remainTime =  parseInt(this.endTime/1000) - parseInt(this.localTime/1000)
    this.countDown()
  },
  filters: {
    remainDateFormat
  },
  methods: {
    countDown() {
      this.timer = setInterval(() => {
        if (this.remainTime > 0) {
          this.remainTime--
        }
        if (this.remainTime == 0) {
          clearInterval(this.timer);
        //   location.reload()
        }
      }, 1000);
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

</script>
