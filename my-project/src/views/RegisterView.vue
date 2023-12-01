<template>
    <section class="bg-gray-50 dark:bg-gray-900">
    <!-- component -->
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="mb-4 container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-1 sm:max-w-md xl:p-8 dark:bg-gray-800 dark:border-gray-700 px-4">
                    <h1 class="mt-4 mb-10 text-3xl text-center dark:text-white space-y-4 md:space-y-6">Sign up</h1>
                    <input 
                        v-model="fullName"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-grey-light rounded mb-6"
                        name="fullname"
                        required=""
                        placeholder="Full Name" />
                    <input 
                        v-model="email" 
                        type="email" 
                        name="email" 
                        id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-grey-light mb-6"
                        placeholder="name@company.com" 
                        required=""/>
                    <input 
                        v-model="userName"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-grey-light rounded mb-6"
                        name="userName"
                        required=""
                        placeholder="User Name"/>
                    <input 
                        v-model="password"
                        type="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-grey-light mb-6"
                        name="password"
                        required=""
                        placeholder="Password" />
                    <input 
                        v-model="confirmPassword"
                        type="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-grey-light mb-6"
                        name="confirmPassword"
                        required=""
                        placeholder="Confirm Password" />
                    <input 
                        v-model="description"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-grey-light mb-3"
                        name="description"
                        required=""
                        placeholder="Description (e.g BE Developer, FE Developer, ....)" />
                        <p class = "text-center text-red-500 space-y-4 md:space-y-6" v-if="error">{{ error }}</p>
                        <button type="submit" @click="register" class="mt-3 w-full text-white bg-primary-600 border hover:bg-gray-300 duration-300  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <div class="text-center text-sm dark:text-white mt-4 mb-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-white" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6 text-white">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-white" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import axiosClient from '../api/clientAxiosApi';
// import bcrypt from 'bcryptjs';

const email = ref('');
const password = ref('');
const description = ref('');
const fullName = ref('');
const userName = ref('');
const error = ref('');
const confirmPassword = ref('');


const register = async () => {
  // Check if any input is empty
  if (
    email.value === '' ||
    password.value === '' ||
    description.value === '' ||
    fullName.value === '' ||
    userName.value === ''
  ) {
    error.value = 'Please fill in all fields.';
    return;
  }else if(password.value !== confirmPassword.value){
    error.value = 'Confirm password does not match.';
    return;
  }
  // Hash the password on the client side
//   const hashedPassword = await bcrypt.hash(password.value, 10);

  try {
    const response = await axiosClient.post('users', {
      userName: userName.value,
      password: password.value,
      description: description.value,
      role: 'user',
      email: email.value,
      fullName: fullName.value,
      createAt: new Date(),
    });

    // Handle the response if needed
    console.log('Registration successful');

    // Clear the error message
    error.value = '';
  } catch (error) {
    // Handle the error if the registration fails
    console.error('Registration failed', error);
    
    // Set the error message
    error.value = 'Registration failed. Please try again.';
  }
};
</script>