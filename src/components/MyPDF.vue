<template>
  <div>
    <pdf src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf" />
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: 'MyPDF',
  componentName: 'MyPDF',
  components: {
    pdf
  }
}
</script>
