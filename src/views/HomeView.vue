<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>
<template>
    <Hero title="Post or hire the skills you have or need" subTitle="The perfect job your skills/needs fit for." />
    <HomeCards />
    <JobListings :limit="3" showButton="true" />
</template>