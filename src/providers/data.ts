import { BACKEND_BASE_URL } from "@/Constants";
import { ListResponse } from "@/pages/Subjects/types";
import { createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";

<<<<<<< HEAD
if(!BACKEND_BASE_URL)
  throw new Error('Please add BACKEND_BASE_URL')


=======
>>>>>>> bc6e31b9f0b3c57ad5abc707b061382a20fa175a
const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({ resource }) => resource,

    buildQueryParams: async({resource, pagination, filters}) => {
      const page = pagination?.currentPage ?? 1;
      const pageSize = pagination?.pageSize ?? 1;

      const params: Record<string, string|number> = {page, limit: pageSize};

      filters?.forEach((filter) => {
        const field = 'field' in filter ? filter.field : '';

        const value = String(filter.value);

        if(resource === 'subjects') {
          if(field === 'department') params.department = value;
          if(field === 'name' || field === 'code') params.search = value;

        }
      })

      return params;
    },

    mapResponse: async (response) => {
<<<<<<< HEAD
      const payload: ListResponse = await response.clone().json();
=======
      const payload: ListResponse = await response.json();
>>>>>>> bc6e31b9f0b3c57ad5abc707b061382a20fa175a
      return payload.data ?? [];
    },

    getTotalCount: async (response) => {
<<<<<<< HEAD
      const payload: ListResponse = await response.clone().json();
=======
      const payload: ListResponse = await response.json();
>>>>>>> bc6e31b9f0b3c57ad5abc707b061382a20fa175a
      return payload.pagination?.total ?? payload.data?.length ?? 0;
    }
  }
}

const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);

export { dataProvider };