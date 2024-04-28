import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3001';
const goodsTagObj = { type: 'Goods', id: 'LIST' };

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Goods'],

    endpoints: ( build ) => ({

        getGoods: build.query({
            query: () => 'goods',
            providesTags: (result) => (
                result
                    ?   [
                        ...result.map(( { id } ) => ({ type: 'Goods', id })),
                        goodsTagObj
                        ]
                    :   [ goodsTagObj ]
            ),
        }),

        addGood: build.mutation({
            query: (body) => ({
                url: 'goods',
                method: 'POST',
                body,
            }),
            invalidatesTags: [ goodsTagObj ]
        }),

        delGood: build.mutation({
            query: (id) => ({
                url: `goods/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Goods', id }],
        }),

        editGood: build.mutation({
            query: ({ id, ...body }) => ({
                url: `goods/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Goods', id }],
        }),
    }),
});

export const { useGetGoodsQuery, useAddGoodMutation, useDelGoodMutation, useEditGoodMutation } = goodsApi;