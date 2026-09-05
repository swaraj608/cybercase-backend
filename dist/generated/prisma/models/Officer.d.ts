import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type OfficerModel = runtime.Types.Result.DefaultSelection<Prisma.$OfficerPayload>;
export type AggregateOfficer = {
    _count: OfficerCountAggregateOutputType | null;
    _min: OfficerMinAggregateOutputType | null;
    _max: OfficerMaxAggregateOutputType | null;
};
export type OfficerMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    badgeNumber: string | null;
    department: string | null;
    designation: string | null;
    jurisdiction: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OfficerMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    badgeNumber: string | null;
    department: string | null;
    designation: string | null;
    jurisdiction: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OfficerCountAggregateOutputType = {
    id: number;
    userId: number;
    badgeNumber: number;
    department: number;
    designation: number;
    jurisdiction: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OfficerMinAggregateInputType = {
    id?: true;
    userId?: true;
    badgeNumber?: true;
    department?: true;
    designation?: true;
    jurisdiction?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OfficerMaxAggregateInputType = {
    id?: true;
    userId?: true;
    badgeNumber?: true;
    department?: true;
    designation?: true;
    jurisdiction?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OfficerCountAggregateInputType = {
    id?: true;
    userId?: true;
    badgeNumber?: true;
    department?: true;
    designation?: true;
    jurisdiction?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OfficerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficerWhereInput;
    orderBy?: Prisma.OfficerOrderByWithRelationInput | Prisma.OfficerOrderByWithRelationInput[];
    cursor?: Prisma.OfficerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OfficerCountAggregateInputType;
    _min?: OfficerMinAggregateInputType;
    _max?: OfficerMaxAggregateInputType;
};
export type GetOfficerAggregateType<T extends OfficerAggregateArgs> = {
    [P in keyof T & keyof AggregateOfficer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOfficer[P]> : Prisma.GetScalarType<T[P], AggregateOfficer[P]>;
};
export type OfficerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficerWhereInput;
    orderBy?: Prisma.OfficerOrderByWithAggregationInput | Prisma.OfficerOrderByWithAggregationInput[];
    by: Prisma.OfficerScalarFieldEnum[] | Prisma.OfficerScalarFieldEnum;
    having?: Prisma.OfficerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OfficerCountAggregateInputType | true;
    _min?: OfficerMinAggregateInputType;
    _max?: OfficerMaxAggregateInputType;
};
export type OfficerGroupByOutputType = {
    id: string;
    userId: string;
    badgeNumber: string | null;
    department: string | null;
    designation: string | null;
    jurisdiction: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OfficerCountAggregateOutputType | null;
    _min: OfficerMinAggregateOutputType | null;
    _max: OfficerMaxAggregateOutputType | null;
};
export type GetOfficerGroupByPayload<T extends OfficerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OfficerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OfficerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OfficerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OfficerGroupByOutputType[P]>;
}>>;
export type OfficerWhereInput = {
    AND?: Prisma.OfficerWhereInput | Prisma.OfficerWhereInput[];
    OR?: Prisma.OfficerWhereInput[];
    NOT?: Prisma.OfficerWhereInput | Prisma.OfficerWhereInput[];
    id?: Prisma.StringFilter<"Officer"> | string;
    userId?: Prisma.StringFilter<"Officer"> | string;
    badgeNumber?: Prisma.StringNullableFilter<"Officer"> | string | null;
    department?: Prisma.StringNullableFilter<"Officer"> | string | null;
    designation?: Prisma.StringNullableFilter<"Officer"> | string | null;
    jurisdiction?: Prisma.StringNullableFilter<"Officer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Officer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Officer"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type OfficerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    department?: Prisma.SortOrderInput | Prisma.SortOrder;
    designation?: Prisma.SortOrderInput | Prisma.SortOrder;
    jurisdiction?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type OfficerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    badgeNumber?: string;
    AND?: Prisma.OfficerWhereInput | Prisma.OfficerWhereInput[];
    OR?: Prisma.OfficerWhereInput[];
    NOT?: Prisma.OfficerWhereInput | Prisma.OfficerWhereInput[];
    department?: Prisma.StringNullableFilter<"Officer"> | string | null;
    designation?: Prisma.StringNullableFilter<"Officer"> | string | null;
    jurisdiction?: Prisma.StringNullableFilter<"Officer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Officer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Officer"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId" | "badgeNumber">;
export type OfficerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    department?: Prisma.SortOrderInput | Prisma.SortOrder;
    designation?: Prisma.SortOrderInput | Prisma.SortOrder;
    jurisdiction?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OfficerCountOrderByAggregateInput;
    _max?: Prisma.OfficerMaxOrderByAggregateInput;
    _min?: Prisma.OfficerMinOrderByAggregateInput;
};
export type OfficerScalarWhereWithAggregatesInput = {
    AND?: Prisma.OfficerScalarWhereWithAggregatesInput | Prisma.OfficerScalarWhereWithAggregatesInput[];
    OR?: Prisma.OfficerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OfficerScalarWhereWithAggregatesInput | Prisma.OfficerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Officer"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Officer"> | string;
    badgeNumber?: Prisma.StringNullableWithAggregatesFilter<"Officer"> | string | null;
    department?: Prisma.StringNullableWithAggregatesFilter<"Officer"> | string | null;
    designation?: Prisma.StringNullableWithAggregatesFilter<"Officer"> | string | null;
    jurisdiction?: Prisma.StringNullableWithAggregatesFilter<"Officer"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Officer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Officer"> | Date | string;
};
export type OfficerCreateInput = {
    id?: string;
    badgeNumber?: string | null;
    department?: string | null;
    designation?: string | null;
    jurisdiction?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOfficerProfileInput;
};
export type OfficerUncheckedCreateInput = {
    id?: string;
    userId: string;
    badgeNumber?: string | null;
    department?: string | null;
    designation?: string | null;
    jurisdiction?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OfficerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jurisdiction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOfficerProfileNestedInput;
};
export type OfficerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jurisdiction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfficerCreateManyInput = {
    id?: string;
    userId: string;
    badgeNumber?: string | null;
    department?: string | null;
    designation?: string | null;
    jurisdiction?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OfficerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jurisdiction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfficerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jurisdiction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfficerNullableScalarRelationFilter = {
    is?: Prisma.OfficerWhereInput | null;
    isNot?: Prisma.OfficerWhereInput | null;
};
export type OfficerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeNumber?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    jurisdiction?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OfficerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeNumber?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    jurisdiction?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OfficerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    badgeNumber?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    jurisdiction?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OfficerCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OfficerCreateWithoutUserInput, Prisma.OfficerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.OfficerCreateOrConnectWithoutUserInput;
    connect?: Prisma.OfficerWhereUniqueInput;
};
export type OfficerUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OfficerCreateWithoutUserInput, Prisma.OfficerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.OfficerCreateOrConnectWithoutUserInput;
    connect?: Prisma.OfficerWhereUniqueInput;
};
export type OfficerUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OfficerCreateWithoutUserInput, Prisma.OfficerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.OfficerCreateOrConnectWithoutUserInput;
    upsert?: Prisma.OfficerUpsertWithoutUserInput;
    disconnect?: Prisma.OfficerWhereInput | boolean;
    delete?: Prisma.OfficerWhereInput | boolean;
    connect?: Prisma.OfficerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfficerUpdateToOneWithWhereWithoutUserInput, Prisma.OfficerUpdateWithoutUserInput>, Prisma.OfficerUncheckedUpdateWithoutUserInput>;
};
export type OfficerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OfficerCreateWithoutUserInput, Prisma.OfficerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.OfficerCreateOrConnectWithoutUserInput;
    upsert?: Prisma.OfficerUpsertWithoutUserInput;
    disconnect?: Prisma.OfficerWhereInput | boolean;
    delete?: Prisma.OfficerWhereInput | boolean;
    connect?: Prisma.OfficerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfficerUpdateToOneWithWhereWithoutUserInput, Prisma.OfficerUpdateWithoutUserInput>, Prisma.OfficerUncheckedUpdateWithoutUserInput>;
};
export type OfficerCreateWithoutUserInput = {
    id?: string;
    badgeNumber?: string | null;
    department?: string | null;
    designation?: string | null;
    jurisdiction?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OfficerUncheckedCreateWithoutUserInput = {
    id?: string;
    badgeNumber?: string | null;
    department?: string | null;
    designation?: string | null;
    jurisdiction?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OfficerCreateOrConnectWithoutUserInput = {
    where: Prisma.OfficerWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficerCreateWithoutUserInput, Prisma.OfficerUncheckedCreateWithoutUserInput>;
};
export type OfficerUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.OfficerUpdateWithoutUserInput, Prisma.OfficerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OfficerCreateWithoutUserInput, Prisma.OfficerUncheckedCreateWithoutUserInput>;
    where?: Prisma.OfficerWhereInput;
};
export type OfficerUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.OfficerWhereInput;
    data: Prisma.XOR<Prisma.OfficerUpdateWithoutUserInput, Prisma.OfficerUncheckedUpdateWithoutUserInput>;
};
export type OfficerUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jurisdiction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfficerUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    badgeNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jurisdiction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfficerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    badgeNumber?: boolean;
    department?: boolean;
    designation?: boolean;
    jurisdiction?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["officer"]>;
export type OfficerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    badgeNumber?: boolean;
    department?: boolean;
    designation?: boolean;
    jurisdiction?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["officer"]>;
export type OfficerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    badgeNumber?: boolean;
    department?: boolean;
    designation?: boolean;
    jurisdiction?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["officer"]>;
export type OfficerSelectScalar = {
    id?: boolean;
    userId?: boolean;
    badgeNumber?: boolean;
    department?: boolean;
    designation?: boolean;
    jurisdiction?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OfficerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "badgeNumber" | "department" | "designation" | "jurisdiction" | "createdAt" | "updatedAt", ExtArgs["result"]["officer"]>;
export type OfficerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OfficerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OfficerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OfficerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Officer";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        badgeNumber: string | null;
        department: string | null;
        designation: string | null;
        jurisdiction: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["officer"]>;
    composites: {};
};
export type OfficerGetPayload<S extends boolean | null | undefined | OfficerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OfficerPayload, S>;
export type OfficerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OfficerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OfficerCountAggregateInputType | true;
};
export interface OfficerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Officer'];
        meta: {
            name: 'Officer';
        };
    };
    findUnique<T extends OfficerFindUniqueArgs>(args: Prisma.SelectSubset<T, OfficerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OfficerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OfficerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OfficerFindFirstArgs>(args?: Prisma.SelectSubset<T, OfficerFindFirstArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OfficerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OfficerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OfficerFindManyArgs>(args?: Prisma.SelectSubset<T, OfficerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OfficerCreateArgs>(args: Prisma.SelectSubset<T, OfficerCreateArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OfficerCreateManyArgs>(args?: Prisma.SelectSubset<T, OfficerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OfficerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OfficerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OfficerDeleteArgs>(args: Prisma.SelectSubset<T, OfficerDeleteArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OfficerUpdateArgs>(args: Prisma.SelectSubset<T, OfficerUpdateArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OfficerDeleteManyArgs>(args?: Prisma.SelectSubset<T, OfficerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OfficerUpdateManyArgs>(args: Prisma.SelectSubset<T, OfficerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OfficerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OfficerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OfficerUpsertArgs>(args: Prisma.SelectSubset<T, OfficerUpsertArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OfficerCountArgs>(args?: Prisma.Subset<T, OfficerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OfficerCountAggregateOutputType> : number>;
    aggregate<T extends OfficerAggregateArgs>(args: Prisma.Subset<T, OfficerAggregateArgs>): Prisma.PrismaPromise<GetOfficerAggregateType<T>>;
    groupBy<T extends OfficerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OfficerGroupByArgs['orderBy'];
    } : {
        orderBy?: OfficerGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OfficerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OfficerFieldRefs;
}
export interface Prisma__OfficerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OfficerFieldRefs {
    readonly id: Prisma.FieldRef<"Officer", 'String'>;
    readonly userId: Prisma.FieldRef<"Officer", 'String'>;
    readonly badgeNumber: Prisma.FieldRef<"Officer", 'String'>;
    readonly department: Prisma.FieldRef<"Officer", 'String'>;
    readonly designation: Prisma.FieldRef<"Officer", 'String'>;
    readonly jurisdiction: Prisma.FieldRef<"Officer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Officer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Officer", 'DateTime'>;
}
export type OfficerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    where: Prisma.OfficerWhereUniqueInput;
};
export type OfficerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    where: Prisma.OfficerWhereUniqueInput;
};
export type OfficerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    where?: Prisma.OfficerWhereInput;
    orderBy?: Prisma.OfficerOrderByWithRelationInput | Prisma.OfficerOrderByWithRelationInput[];
    cursor?: Prisma.OfficerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfficerScalarFieldEnum | Prisma.OfficerScalarFieldEnum[];
};
export type OfficerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    where?: Prisma.OfficerWhereInput;
    orderBy?: Prisma.OfficerOrderByWithRelationInput | Prisma.OfficerOrderByWithRelationInput[];
    cursor?: Prisma.OfficerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfficerScalarFieldEnum | Prisma.OfficerScalarFieldEnum[];
};
export type OfficerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    where?: Prisma.OfficerWhereInput;
    orderBy?: Prisma.OfficerOrderByWithRelationInput | Prisma.OfficerOrderByWithRelationInput[];
    cursor?: Prisma.OfficerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfficerScalarFieldEnum | Prisma.OfficerScalarFieldEnum[];
};
export type OfficerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfficerCreateInput, Prisma.OfficerUncheckedCreateInput>;
};
export type OfficerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OfficerCreateManyInput | Prisma.OfficerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OfficerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    data: Prisma.OfficerCreateManyInput | Prisma.OfficerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OfficerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OfficerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfficerUpdateInput, Prisma.OfficerUncheckedUpdateInput>;
    where: Prisma.OfficerWhereUniqueInput;
};
export type OfficerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OfficerUpdateManyMutationInput, Prisma.OfficerUncheckedUpdateManyInput>;
    where?: Prisma.OfficerWhereInput;
    limit?: number;
};
export type OfficerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfficerUpdateManyMutationInput, Prisma.OfficerUncheckedUpdateManyInput>;
    where?: Prisma.OfficerWhereInput;
    limit?: number;
    include?: Prisma.OfficerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OfficerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    where: Prisma.OfficerWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfficerCreateInput, Prisma.OfficerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OfficerUpdateInput, Prisma.OfficerUncheckedUpdateInput>;
};
export type OfficerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    where: Prisma.OfficerWhereUniqueInput;
};
export type OfficerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfficerWhereInput;
    limit?: number;
};
export type OfficerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
};
