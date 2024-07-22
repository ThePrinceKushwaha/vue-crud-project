<script setup>
import jobData from '@/jobs.json';
import { ref, defineProps, onMounted, reactive } from 'vue';
import Listings from '@/components/Listings.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

// const jobs = ref(jobData);

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false,
    }
});


//using ref
// const jobs = ref([]);

//using reactive instead of ref
const state = reactive({
    jobs: [],
    isLoading: true

})

onMounted(async () => {
    try {
        const response = await axios.get('/api/jobs');
        console.log(response);
        state.jobs = response.data;

    } catch (error) {
        console.log(error);
    } finally {
        state.isLoading = false;
    }
});




</script>
<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>

            <!-- show the loader when the loading is set true -->
            <div v-if="isLoading" class="text-gray-600 py-6">
                <PulseLoader />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Job Listing -->
                <Listings v-for="job in state.jobs.slice(0, limit) || state.jobs.length" :key="job.id" :job="job" />


            </div>
        </div>

    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View All Jobs
        </RouterLink>
    </section>
</template>
