<template>
  <Form 
    class="space-y-8 divide-y divide-gray-200" 
    :validation-schema="schema"
    @submit="submit">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Profile
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-6">
            <label for="photo" class="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <div class="mt-1 flex items-center">
              <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first_name" class="block text-sm font-medium text-gray-700">
              First name
            </label>
            <div class="mt-1">
              <Field type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.firstname" />
              <ErrorMessage name="firstname" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last_name" class="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <div class="mt-1">
              <Field type="text" name="last_name" id="last_name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.lastname" />
              <ErrorMessage name="lastname" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.email" disabled />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="timezone" class="block text-sm font-medium text-gray-700">
              Timezone
            </label>
            <div class="mt-1">
              <Field id="timezone" as="select" name="timezone" autocomplete="timezone" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.timezone">
                <option>EST</option>
                <option>PST</option>
                <option>AEST</option>
              </Field>
              <ErrorMessage name="timezone" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium text-gray-700">
              Country / Region
            </label>
            <div class="mt-1">
              <Field id="country" as="select" name="country" autocomplete="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.country">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </Field>
              <ErrorMessage name="country" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="street_address" class="block text-sm font-medium text-gray-700">
              Street address
            </label>
            <div class="mt-1">
              <Field type="text" name="street_address" id="street_address" autocomplete="street-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.streetaddress" />
              <ErrorMessage name="streetaddress" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="city" class="block text-sm font-medium text-gray-700">
              City
            </label>
            <div class="mt-1">
              <Field type="text" name="city" id="city" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.city" />
              <ErrorMessage name="city" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="state" class="block text-sm font-medium text-gray-700">
              State / Province
            </label>
            <div class="mt-1">
              <Field type="text" name="state" id="state" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.state" />
              <ErrorMessage name="state" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="zip" class="block text-sm font-medium text-gray-700">
              ZIP / Postal
            </label>
            <div class="mt-1">
              <Field type="text" name="zip" id="zip" autocomplete="postal-code" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.postalcode" />
              <ErrorMessage name="postalcode" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="countryphone" class="block text-sm font-medium text-gray-700">
              Dial Code
            </label>
            <div class="mt-1">
              <Field type="text" name="countryphone" id="countryphone" autocomplete="dialcode" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.countryphone" />
              <ErrorMessage name="countryphone" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="phonenumber" class="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <div class="mt-1">
              <Field type="text" name="phonenumber" id="phonenumber" autocomplete="phonenumber" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" v-model="form.phonenumber" />
              <ErrorMessage name="phonenumber" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cancel
        </button>
        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
  name: 'Profile',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        timezone: "",
        country: "",
        state: "",
        city: "",
        postalcode: "",
        streetaddress: "",
        countryphone: 0,
        phonenumber: "",
        uid: null
      },
      schema: yup.object({
        firstname: yup.string().min(8),
        countryphone: yup.number(),
        phonenumber: yup.string().min(8),
      })
    }
  },
  computed: {
    ...mapGetters('auth', ['userId']),
  },
  methods: {
    ...mapActions('auth', ['setProfile', 'getProfile']),
    async submit() {
      let uid = localStorage.getItem('uid');
      if (uid) {
        this.form.uid = uid;
      }
      let res = await this.setProfile(this.form);
      if (res.message) {
        this.$notify({ type: "error", text: res.message });
      }
      console.log(res);
    },
  },
  async mounted() {
    let uid = localStorage.getItem('uid');
    if (uid) {
      let res = await this.getProfile(uid);
      this.form = Object.assign({}, res);
    }
  }
}
</script>