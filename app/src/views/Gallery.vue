<template>
    <div class="gallery-wrapper">
        <div class="gallery">
            <!-- <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script> -->
            <iframe src="https://cdn.lightwidget.com/widgets/e92a54d63bc553809ddd633af762b33.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0px; overflow: hidden; height: 473px;">
                
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    mounted() {
        let recaptchaScript = document.createElement('script');
        recaptchaScript.setAttribute('src', 'https://cdn.lightwidget.com/widgets/lightwidget.js');
        document.head.appendChild(recaptchaScript);
    }
}
</script>

<style>
    body {
        height: 90vh;
    }
</style>