import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type CaseHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$CaseHistoryPayload>;
export type AggregateCaseHistory = {
    _count: CaseHistoryCountAggregateOutputType | null;
    _min: CaseHistoryMinAggregateOutputType | null;
    _max: CaseHistoryMaxAggregateOutputType | null;
};
export type CaseHistoryMinAggregateOutputType = {
    id: string | null;
    caseId: string | null;
    changedById: string | null;
    action: string | null;
    oldStatus: $Enums.CaseStatus | null;
    newStatus: $Enums.CaseStatus | null;
    remarks: string | null;
    createdAt: Date | null;
};
export type CaseHistoryMaxAggregateOutputType = {
    id: string | null;
    caseId: string | null;
    changedById: string | null;
    action: string | null;
    oldStatus: $Enums.CaseStatus | null;
    newStatus: $Enums.CaseStatus | null;
    remarks: string | null;
    createdAt: Date | null;
};
export type CaseHistoryCountAggregateOutputType = {
    id: number;
    caseId: number;
    changedById: number;
    action: number;
    oldStatus: number;
    newStatus: number;
    remarks: number;
    createdAt: number;
    _all: number;
};
export type CaseHistoryMinAggregateInputType = {
    id?: true;
    caseId?: true;
    changedById?: true;
    action?: true;
    oldStatus?: true;
    newStatus?: true;
    remarks?: true;
    createdAt?: true;
};
export type CaseHistoryMaxAggregateInputType = {
    id?: true;
    caseId?: true;
    changedById?: true;
    action?: true;
    oldStatus?: true;
    newStatus?: true;
    remarks?: true;
    createdAt?: true;
};
export type CaseHistoryCountAggregateInputType = {
    id?: true;
    caseId?: true;
    changedById?: true;
    action?: true;
    oldStatus?: true;
    newStatus?: true;
    remarks?: true;
    createdAt?: true;
    _all?: true;
};
export type CaseHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseHistoryWhereInput;
    orderBy?: Prisma.CaseHistoryOrderByWithRelationInput | Prisma.CaseHistoryOrderByWithRelationInput[];
    cursor?: Prisma.CaseHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CaseHistoryCountAggregateInputType;
    _min?: CaseHistoryMinAggregateInputType;
    _max?: CaseHistoryMaxAggregateInputType;
};
export type GetCaseHistoryAggregateType<T extends CaseHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCaseHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCaseHistory[P]> : Prisma.GetScalarType<T[P], AggregateCaseHistory[P]>;
};
export type CaseHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseHistoryWhereInput;
    orderBy?: Prisma.CaseHistoryOrderByWithAggregationInput | Prisma.CaseHistoryOrderByWithAggregationInput[];
    by: Prisma.CaseHistoryScalarFieldEnum[] | Prisma.CaseHistoryScalarFieldEnum;
    having?: Prisma.CaseHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CaseHistoryCountAggregateInputType | true;
    _min?: CaseHistoryMinAggregateInputType;
    _max?: CaseHistoryMaxAggregateInputType;
};
export type CaseHistoryGroupByOutputType = {
    id: string;
    caseId: string;
    changedById: string;
    action: string;
    oldStatus: $Enums.CaseStatus | null;
    newStatus: $Enums.CaseStatus | null;
    remarks: string | null;
    createdAt: Date;
    _count: CaseHistoryCountAggregateOutputType | null;
    _min: CaseHistoryMinAggregateOutputType | null;
    _max: CaseHistoryMaxAggregateOutputType | null;
};
export type GetCaseHistoryGroupByPayload<T extends CaseHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CaseHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CaseHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CaseHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CaseHistoryGroupByOutputType[P]>;
}>>;
export type CaseHistoryWhereInput = {
    AND?: Prisma.CaseHistoryWhereInput | Prisma.CaseHistoryWhereInput[];
    OR?: Prisma.CaseHistoryWhereInput[];
    NOT?: Prisma.CaseHistoryWhereInput | Prisma.CaseHistoryWhereInput[];
    id?: Prisma.StringFilter<"CaseHistory"> | string;
    caseId?: Prisma.StringFilter<"CaseHistory"> | string;
    changedById?: Prisma.StringFilter<"CaseHistory"> | string;
    action?: Prisma.StringFilter<"CaseHistory"> | string;
    oldStatus?: Prisma.EnumCaseStatusNullableFilter<"CaseHistory"> | $Enums.CaseStatus | null;
    newStatus?: Prisma.EnumCaseStatusNullableFilter<"CaseHistory"> | $Enums.CaseStatus | null;
    remarks?: Prisma.StringNullableFilter<"CaseHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CaseHistory"> | Date | string;
    case?: Prisma.XOR<Prisma.CaseScalarRelationFilter, Prisma.CaseWhereInput>;
    changedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CaseHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    newStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    case?: Prisma.CaseOrderByWithRelationInput;
    changedBy?: Prisma.UserOrderByWithRelationInput;
};
export type CaseHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CaseHistoryWhereInput | Prisma.CaseHistoryWhereInput[];
    OR?: Prisma.CaseHistoryWhereInput[];
    NOT?: Prisma.CaseHistoryWhereInput | Prisma.CaseHistoryWhereInput[];
    caseId?: Prisma.StringFilter<"CaseHistory"> | string;
    changedById?: Prisma.StringFilter<"CaseHistory"> | string;
    action?: Prisma.StringFilter<"CaseHistory"> | string;
    oldStatus?: Prisma.EnumCaseStatusNullableFilter<"CaseHistory"> | $Enums.CaseStatus | null;
    newStatus?: Prisma.EnumCaseStatusNullableFilter<"CaseHistory"> | $Enums.CaseStatus | null;
    remarks?: Prisma.StringNullableFilter<"CaseHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CaseHistory"> | Date | string;
    case?: Prisma.XOR<Prisma.CaseScalarRelationFilter, Prisma.CaseWhereInput>;
    changedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type CaseHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    newStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CaseHistoryCountOrderByAggregateInput;
    _max?: Prisma.CaseHistoryMaxOrderByAggregateInput;
    _min?: Prisma.CaseHistoryMinOrderByAggregateInput;
};
export type CaseHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.CaseHistoryScalarWhereWithAggregatesInput | Prisma.CaseHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.CaseHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CaseHistoryScalarWhereWithAggregatesInput | Prisma.CaseHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CaseHistory"> | string;
    caseId?: Prisma.StringWithAggregatesFilter<"CaseHistory"> | string;
    changedById?: Prisma.StringWithAggregatesFilter<"CaseHistory"> | string;
    action?: Prisma.StringWithAggregatesFilter<"CaseHistory"> | string;
    oldStatus?: Prisma.EnumCaseStatusNullableWithAggregatesFilter<"CaseHistory"> | $Enums.CaseStatus | null;
    newStatus?: Prisma.EnumCaseStatusNullableWithAggregatesFilter<"CaseHistory"> | $Enums.CaseStatus | null;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"CaseHistory"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CaseHistory"> | Date | string;
};
export type CaseHistoryCreateInput = {
    id?: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
    case: Prisma.CaseCreateNestedOneWithoutHistoryInput;
    changedBy: Prisma.UserCreateNestedOneWithoutCaseHistoryChangesInput;
};
export type CaseHistoryUncheckedCreateInput = {
    id?: string;
    caseId: string;
    changedById: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CaseHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    case?: Prisma.CaseUpdateOneRequiredWithoutHistoryNestedInput;
    changedBy?: Prisma.UserUpdateOneRequiredWithoutCaseHistoryChangesNestedInput;
};
export type CaseHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CaseHistoryCreateManyInput = {
    id?: string;
    caseId: string;
    changedById: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CaseHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CaseHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CaseHistoryListRelationFilter = {
    every?: Prisma.CaseHistoryWhereInput;
    some?: Prisma.CaseHistoryWhereInput;
    none?: Prisma.CaseHistoryWhereInput;
};
export type CaseHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CaseHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CaseHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CaseHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CaseHistoryCreateNestedManyWithoutChangedByInput = {
    create?: Prisma.XOR<Prisma.CaseHistoryCreateWithoutChangedByInput, Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput> | Prisma.CaseHistoryCreateWithoutChangedByInput[] | Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.CaseHistoryCreateOrConnectWithoutChangedByInput | Prisma.CaseHistoryCreateOrConnectWithoutChangedByInput[];
    createMany?: Prisma.CaseHistoryCreateManyChangedByInputEnvelope;
    connect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
};
export type CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: Prisma.XOR<Prisma.CaseHistoryCreateWithoutChangedByInput, Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput> | Prisma.CaseHistoryCreateWithoutChangedByInput[] | Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.CaseHistoryCreateOrConnectWithoutChangedByInput | Prisma.CaseHistoryCreateOrConnectWithoutChangedByInput[];
    createMany?: Prisma.CaseHistoryCreateManyChangedByInputEnvelope;
    connect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
};
export type CaseHistoryUpdateManyWithoutChangedByNestedInput = {
    create?: Prisma.XOR<Prisma.CaseHistoryCreateWithoutChangedByInput, Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput> | Prisma.CaseHistoryCreateWithoutChangedByInput[] | Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.CaseHistoryCreateOrConnectWithoutChangedByInput | Prisma.CaseHistoryCreateOrConnectWithoutChangedByInput[];
    upsert?: Prisma.CaseHistoryUpsertWithWhereUniqueWithoutChangedByInput | Prisma.CaseHistoryUpsertWithWhereUniqueWithoutChangedByInput[];
    createMany?: Prisma.CaseHistoryCreateManyChangedByInputEnvelope;
    set?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    disconnect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    delete?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    connect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    update?: Prisma.CaseHistoryUpdateWithWhereUniqueWithoutChangedByInput | Prisma.CaseHistoryUpdateWithWhereUniqueWithoutChangedByInput[];
    updateMany?: Prisma.CaseHistoryUpdateManyWithWhereWithoutChangedByInput | Prisma.CaseHistoryUpdateManyWithWhereWithoutChangedByInput[];
    deleteMany?: Prisma.CaseHistoryScalarWhereInput | Prisma.CaseHistoryScalarWhereInput[];
};
export type CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: Prisma.XOR<Prisma.CaseHistoryCreateWithoutChangedByInput, Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput> | Prisma.CaseHistoryCreateWithoutChangedByInput[] | Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.CaseHistoryCreateOrConnectWithoutChangedByInput | Prisma.CaseHistoryCreateOrConnectWithoutChangedByInput[];
    upsert?: Prisma.CaseHistoryUpsertWithWhereUniqueWithoutChangedByInput | Prisma.CaseHistoryUpsertWithWhereUniqueWithoutChangedByInput[];
    createMany?: Prisma.CaseHistoryCreateManyChangedByInputEnvelope;
    set?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    disconnect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    delete?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    connect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    update?: Prisma.CaseHistoryUpdateWithWhereUniqueWithoutChangedByInput | Prisma.CaseHistoryUpdateWithWhereUniqueWithoutChangedByInput[];
    updateMany?: Prisma.CaseHistoryUpdateManyWithWhereWithoutChangedByInput | Prisma.CaseHistoryUpdateManyWithWhereWithoutChangedByInput[];
    deleteMany?: Prisma.CaseHistoryScalarWhereInput | Prisma.CaseHistoryScalarWhereInput[];
};
export type CaseHistoryCreateNestedManyWithoutCaseInput = {
    create?: Prisma.XOR<Prisma.CaseHistoryCreateWithoutCaseInput, Prisma.CaseHistoryUncheckedCreateWithoutCaseInput> | Prisma.CaseHistoryCreateWithoutCaseInput[] | Prisma.CaseHistoryUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.CaseHistoryCreateOrConnectWithoutCaseInput | Prisma.CaseHistoryCreateOrConnectWithoutCaseInput[];
    createMany?: Prisma.CaseHistoryCreateManyCaseInputEnvelope;
    connect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
};
export type CaseHistoryUncheckedCreateNestedManyWithoutCaseInput = {
    create?: Prisma.XOR<Prisma.CaseHistoryCreateWithoutCaseInput, Prisma.CaseHistoryUncheckedCreateWithoutCaseInput> | Prisma.CaseHistoryCreateWithoutCaseInput[] | Prisma.CaseHistoryUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.CaseHistoryCreateOrConnectWithoutCaseInput | Prisma.CaseHistoryCreateOrConnectWithoutCaseInput[];
    createMany?: Prisma.CaseHistoryCreateManyCaseInputEnvelope;
    connect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
};
export type CaseHistoryUpdateManyWithoutCaseNestedInput = {
    create?: Prisma.XOR<Prisma.CaseHistoryCreateWithoutCaseInput, Prisma.CaseHistoryUncheckedCreateWithoutCaseInput> | Prisma.CaseHistoryCreateWithoutCaseInput[] | Prisma.CaseHistoryUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.CaseHistoryCreateOrConnectWithoutCaseInput | Prisma.CaseHistoryCreateOrConnectWithoutCaseInput[];
    upsert?: Prisma.CaseHistoryUpsertWithWhereUniqueWithoutCaseInput | Prisma.CaseHistoryUpsertWithWhereUniqueWithoutCaseInput[];
    createMany?: Prisma.CaseHistoryCreateManyCaseInputEnvelope;
    set?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    disconnect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    delete?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    connect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    update?: Prisma.CaseHistoryUpdateWithWhereUniqueWithoutCaseInput | Prisma.CaseHistoryUpdateWithWhereUniqueWithoutCaseInput[];
    updateMany?: Prisma.CaseHistoryUpdateManyWithWhereWithoutCaseInput | Prisma.CaseHistoryUpdateManyWithWhereWithoutCaseInput[];
    deleteMany?: Prisma.CaseHistoryScalarWhereInput | Prisma.CaseHistoryScalarWhereInput[];
};
export type CaseHistoryUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: Prisma.XOR<Prisma.CaseHistoryCreateWithoutCaseInput, Prisma.CaseHistoryUncheckedCreateWithoutCaseInput> | Prisma.CaseHistoryCreateWithoutCaseInput[] | Prisma.CaseHistoryUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.CaseHistoryCreateOrConnectWithoutCaseInput | Prisma.CaseHistoryCreateOrConnectWithoutCaseInput[];
    upsert?: Prisma.CaseHistoryUpsertWithWhereUniqueWithoutCaseInput | Prisma.CaseHistoryUpsertWithWhereUniqueWithoutCaseInput[];
    createMany?: Prisma.CaseHistoryCreateManyCaseInputEnvelope;
    set?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    disconnect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    delete?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    connect?: Prisma.CaseHistoryWhereUniqueInput | Prisma.CaseHistoryWhereUniqueInput[];
    update?: Prisma.CaseHistoryUpdateWithWhereUniqueWithoutCaseInput | Prisma.CaseHistoryUpdateWithWhereUniqueWithoutCaseInput[];
    updateMany?: Prisma.CaseHistoryUpdateManyWithWhereWithoutCaseInput | Prisma.CaseHistoryUpdateManyWithWhereWithoutCaseInput[];
    deleteMany?: Prisma.CaseHistoryScalarWhereInput | Prisma.CaseHistoryScalarWhereInput[];
};
export type NullableEnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus | null;
};
export type CaseHistoryCreateWithoutChangedByInput = {
    id?: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
    case: Prisma.CaseCreateNestedOneWithoutHistoryInput;
};
export type CaseHistoryUncheckedCreateWithoutChangedByInput = {
    id?: string;
    caseId: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CaseHistoryCreateOrConnectWithoutChangedByInput = {
    where: Prisma.CaseHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseHistoryCreateWithoutChangedByInput, Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput>;
};
export type CaseHistoryCreateManyChangedByInputEnvelope = {
    data: Prisma.CaseHistoryCreateManyChangedByInput | Prisma.CaseHistoryCreateManyChangedByInput[];
    skipDuplicates?: boolean;
};
export type CaseHistoryUpsertWithWhereUniqueWithoutChangedByInput = {
    where: Prisma.CaseHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CaseHistoryUpdateWithoutChangedByInput, Prisma.CaseHistoryUncheckedUpdateWithoutChangedByInput>;
    create: Prisma.XOR<Prisma.CaseHistoryCreateWithoutChangedByInput, Prisma.CaseHistoryUncheckedCreateWithoutChangedByInput>;
};
export type CaseHistoryUpdateWithWhereUniqueWithoutChangedByInput = {
    where: Prisma.CaseHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CaseHistoryUpdateWithoutChangedByInput, Prisma.CaseHistoryUncheckedUpdateWithoutChangedByInput>;
};
export type CaseHistoryUpdateManyWithWhereWithoutChangedByInput = {
    where: Prisma.CaseHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.CaseHistoryUpdateManyMutationInput, Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByInput>;
};
export type CaseHistoryScalarWhereInput = {
    AND?: Prisma.CaseHistoryScalarWhereInput | Prisma.CaseHistoryScalarWhereInput[];
    OR?: Prisma.CaseHistoryScalarWhereInput[];
    NOT?: Prisma.CaseHistoryScalarWhereInput | Prisma.CaseHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"CaseHistory"> | string;
    caseId?: Prisma.StringFilter<"CaseHistory"> | string;
    changedById?: Prisma.StringFilter<"CaseHistory"> | string;
    action?: Prisma.StringFilter<"CaseHistory"> | string;
    oldStatus?: Prisma.EnumCaseStatusNullableFilter<"CaseHistory"> | $Enums.CaseStatus | null;
    newStatus?: Prisma.EnumCaseStatusNullableFilter<"CaseHistory"> | $Enums.CaseStatus | null;
    remarks?: Prisma.StringNullableFilter<"CaseHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CaseHistory"> | Date | string;
};
export type CaseHistoryCreateWithoutCaseInput = {
    id?: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
    changedBy: Prisma.UserCreateNestedOneWithoutCaseHistoryChangesInput;
};
export type CaseHistoryUncheckedCreateWithoutCaseInput = {
    id?: string;
    changedById: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CaseHistoryCreateOrConnectWithoutCaseInput = {
    where: Prisma.CaseHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseHistoryCreateWithoutCaseInput, Prisma.CaseHistoryUncheckedCreateWithoutCaseInput>;
};
export type CaseHistoryCreateManyCaseInputEnvelope = {
    data: Prisma.CaseHistoryCreateManyCaseInput | Prisma.CaseHistoryCreateManyCaseInput[];
    skipDuplicates?: boolean;
};
export type CaseHistoryUpsertWithWhereUniqueWithoutCaseInput = {
    where: Prisma.CaseHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CaseHistoryUpdateWithoutCaseInput, Prisma.CaseHistoryUncheckedUpdateWithoutCaseInput>;
    create: Prisma.XOR<Prisma.CaseHistoryCreateWithoutCaseInput, Prisma.CaseHistoryUncheckedCreateWithoutCaseInput>;
};
export type CaseHistoryUpdateWithWhereUniqueWithoutCaseInput = {
    where: Prisma.CaseHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CaseHistoryUpdateWithoutCaseInput, Prisma.CaseHistoryUncheckedUpdateWithoutCaseInput>;
};
export type CaseHistoryUpdateManyWithWhereWithoutCaseInput = {
    where: Prisma.CaseHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.CaseHistoryUpdateManyMutationInput, Prisma.CaseHistoryUncheckedUpdateManyWithoutCaseInput>;
};
export type CaseHistoryCreateManyChangedByInput = {
    id?: string;
    caseId: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CaseHistoryUpdateWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    case?: Prisma.CaseUpdateOneRequiredWithoutHistoryNestedInput;
};
export type CaseHistoryUncheckedUpdateWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CaseHistoryUncheckedUpdateManyWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CaseHistoryCreateManyCaseInput = {
    id?: string;
    changedById: string;
    action: string;
    oldStatus?: $Enums.CaseStatus | null;
    newStatus?: $Enums.CaseStatus | null;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CaseHistoryUpdateWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    changedBy?: Prisma.UserUpdateOneRequiredWithoutCaseHistoryChangesNestedInput;
};
export type CaseHistoryUncheckedUpdateWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CaseHistoryUncheckedUpdateManyWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedById?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    newStatus?: Prisma.NullableEnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus | null;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CaseHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    changedById?: boolean;
    action?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caseHistory"]>;
export type CaseHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    changedById?: boolean;
    action?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caseHistory"]>;
export type CaseHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    changedById?: boolean;
    action?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caseHistory"]>;
export type CaseHistorySelectScalar = {
    id?: boolean;
    caseId?: boolean;
    changedById?: boolean;
    action?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
};
export type CaseHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "caseId" | "changedById" | "action" | "oldStatus" | "newStatus" | "remarks" | "createdAt", ExtArgs["result"]["caseHistory"]>;
export type CaseHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CaseHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CaseHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CaseHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CaseHistory";
    objects: {
        case: Prisma.$CasePayload<ExtArgs>;
        changedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        caseId: string;
        changedById: string;
        action: string;
        oldStatus: $Enums.CaseStatus | null;
        newStatus: $Enums.CaseStatus | null;
        remarks: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["caseHistory"]>;
    composites: {};
};
export type CaseHistoryGetPayload<S extends boolean | null | undefined | CaseHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload, S>;
export type CaseHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CaseHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CaseHistoryCountAggregateInputType | true;
};
export interface CaseHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CaseHistory'];
        meta: {
            name: 'CaseHistory';
        };
    };
    findUnique<T extends CaseHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, CaseHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CaseHistoryClient<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CaseHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CaseHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CaseHistoryClient<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CaseHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, CaseHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__CaseHistoryClient<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CaseHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CaseHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CaseHistoryClient<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CaseHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, CaseHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CaseHistoryCreateArgs>(args: Prisma.SelectSubset<T, CaseHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__CaseHistoryClient<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CaseHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, CaseHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CaseHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CaseHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CaseHistoryDeleteArgs>(args: Prisma.SelectSubset<T, CaseHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__CaseHistoryClient<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CaseHistoryUpdateArgs>(args: Prisma.SelectSubset<T, CaseHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__CaseHistoryClient<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CaseHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, CaseHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CaseHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, CaseHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CaseHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CaseHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CaseHistoryUpsertArgs>(args: Prisma.SelectSubset<T, CaseHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__CaseHistoryClient<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CaseHistoryCountArgs>(args?: Prisma.Subset<T, CaseHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CaseHistoryCountAggregateOutputType> : number>;
    aggregate<T extends CaseHistoryAggregateArgs>(args: Prisma.Subset<T, CaseHistoryAggregateArgs>): Prisma.PrismaPromise<GetCaseHistoryAggregateType<T>>;
    groupBy<T extends CaseHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CaseHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: CaseHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CaseHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CaseHistoryFieldRefs;
}
export interface Prisma__CaseHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    case<T extends Prisma.CaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CaseDefaultArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    changedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CaseHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"CaseHistory", 'String'>;
    readonly caseId: Prisma.FieldRef<"CaseHistory", 'String'>;
    readonly changedById: Prisma.FieldRef<"CaseHistory", 'String'>;
    readonly action: Prisma.FieldRef<"CaseHistory", 'String'>;
    readonly oldStatus: Prisma.FieldRef<"CaseHistory", 'CaseStatus'>;
    readonly newStatus: Prisma.FieldRef<"CaseHistory", 'CaseStatus'>;
    readonly remarks: Prisma.FieldRef<"CaseHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CaseHistory", 'DateTime'>;
}
export type CaseHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    where: Prisma.CaseHistoryWhereUniqueInput;
};
export type CaseHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    where: Prisma.CaseHistoryWhereUniqueInput;
};
export type CaseHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    where?: Prisma.CaseHistoryWhereInput;
    orderBy?: Prisma.CaseHistoryOrderByWithRelationInput | Prisma.CaseHistoryOrderByWithRelationInput[];
    cursor?: Prisma.CaseHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaseHistoryScalarFieldEnum | Prisma.CaseHistoryScalarFieldEnum[];
};
export type CaseHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    where?: Prisma.CaseHistoryWhereInput;
    orderBy?: Prisma.CaseHistoryOrderByWithRelationInput | Prisma.CaseHistoryOrderByWithRelationInput[];
    cursor?: Prisma.CaseHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaseHistoryScalarFieldEnum | Prisma.CaseHistoryScalarFieldEnum[];
};
export type CaseHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    where?: Prisma.CaseHistoryWhereInput;
    orderBy?: Prisma.CaseHistoryOrderByWithRelationInput | Prisma.CaseHistoryOrderByWithRelationInput[];
    cursor?: Prisma.CaseHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaseHistoryScalarFieldEnum | Prisma.CaseHistoryScalarFieldEnum[];
};
export type CaseHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaseHistoryCreateInput, Prisma.CaseHistoryUncheckedCreateInput>;
};
export type CaseHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CaseHistoryCreateManyInput | Prisma.CaseHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CaseHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    data: Prisma.CaseHistoryCreateManyInput | Prisma.CaseHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CaseHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CaseHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaseHistoryUpdateInput, Prisma.CaseHistoryUncheckedUpdateInput>;
    where: Prisma.CaseHistoryWhereUniqueInput;
};
export type CaseHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CaseHistoryUpdateManyMutationInput, Prisma.CaseHistoryUncheckedUpdateManyInput>;
    where?: Prisma.CaseHistoryWhereInput;
    limit?: number;
};
export type CaseHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaseHistoryUpdateManyMutationInput, Prisma.CaseHistoryUncheckedUpdateManyInput>;
    where?: Prisma.CaseHistoryWhereInput;
    limit?: number;
    include?: Prisma.CaseHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CaseHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    where: Prisma.CaseHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseHistoryCreateInput, Prisma.CaseHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CaseHistoryUpdateInput, Prisma.CaseHistoryUncheckedUpdateInput>;
};
export type CaseHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
    where: Prisma.CaseHistoryWhereUniqueInput;
};
export type CaseHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseHistoryWhereInput;
    limit?: number;
};
export type CaseHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseHistorySelect<ExtArgs> | null;
    omit?: Prisma.CaseHistoryOmit<ExtArgs> | null;
    include?: Prisma.CaseHistoryInclude<ExtArgs> | null;
};
