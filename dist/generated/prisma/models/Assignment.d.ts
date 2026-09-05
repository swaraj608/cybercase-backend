import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AssignmentPayload>;
export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
};
export type AssignmentMinAggregateOutputType = {
    id: string | null;
    caseId: string | null;
    officerId: string | null;
    assignedById: string | null;
    assignedAt: Date | null;
    unassignedAt: Date | null;
    reason: string | null;
};
export type AssignmentMaxAggregateOutputType = {
    id: string | null;
    caseId: string | null;
    officerId: string | null;
    assignedById: string | null;
    assignedAt: Date | null;
    unassignedAt: Date | null;
    reason: string | null;
};
export type AssignmentCountAggregateOutputType = {
    id: number;
    caseId: number;
    officerId: number;
    assignedById: number;
    assignedAt: number;
    unassignedAt: number;
    reason: number;
    _all: number;
};
export type AssignmentMinAggregateInputType = {
    id?: true;
    caseId?: true;
    officerId?: true;
    assignedById?: true;
    assignedAt?: true;
    unassignedAt?: true;
    reason?: true;
};
export type AssignmentMaxAggregateInputType = {
    id?: true;
    caseId?: true;
    officerId?: true;
    assignedById?: true;
    assignedAt?: true;
    unassignedAt?: true;
    reason?: true;
};
export type AssignmentCountAggregateInputType = {
    id?: true;
    caseId?: true;
    officerId?: true;
    assignedById?: true;
    assignedAt?: true;
    unassignedAt?: true;
    reason?: true;
    _all?: true;
};
export type AssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssignmentCountAggregateInputType;
    _min?: AssignmentMinAggregateInputType;
    _max?: AssignmentMaxAggregateInputType;
};
export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssignment[P]> : Prisma.GetScalarType<T[P], AggregateAssignment[P]>;
};
export type AssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithAggregationInput | Prisma.AssignmentOrderByWithAggregationInput[];
    by: Prisma.AssignmentScalarFieldEnum[] | Prisma.AssignmentScalarFieldEnum;
    having?: Prisma.AssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssignmentCountAggregateInputType | true;
    _min?: AssignmentMinAggregateInputType;
    _max?: AssignmentMaxAggregateInputType;
};
export type AssignmentGroupByOutputType = {
    id: string;
    caseId: string;
    officerId: string;
    assignedById: string;
    assignedAt: Date;
    unassignedAt: Date | null;
    reason: string | null;
    _count: AssignmentCountAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
};
export type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssignmentGroupByOutputType[P]>;
}>>;
export type AssignmentWhereInput = {
    AND?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    OR?: Prisma.AssignmentWhereInput[];
    NOT?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    id?: Prisma.StringFilter<"Assignment"> | string;
    caseId?: Prisma.StringFilter<"Assignment"> | string;
    officerId?: Prisma.StringFilter<"Assignment"> | string;
    assignedById?: Prisma.StringFilter<"Assignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    unassignedAt?: Prisma.DateTimeNullableFilter<"Assignment"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"Assignment"> | string | null;
    case?: Prisma.XOR<Prisma.CaseScalarRelationFilter, Prisma.CaseWhereInput>;
    officer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    officerId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    case?: Prisma.CaseOrderByWithRelationInput;
    officer?: Prisma.UserOrderByWithRelationInput;
    assignedBy?: Prisma.UserOrderByWithRelationInput;
};
export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    OR?: Prisma.AssignmentWhereInput[];
    NOT?: Prisma.AssignmentWhereInput | Prisma.AssignmentWhereInput[];
    caseId?: Prisma.StringFilter<"Assignment"> | string;
    officerId?: Prisma.StringFilter<"Assignment"> | string;
    assignedById?: Prisma.StringFilter<"Assignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    unassignedAt?: Prisma.DateTimeNullableFilter<"Assignment"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"Assignment"> | string | null;
    case?: Prisma.XOR<Prisma.CaseScalarRelationFilter, Prisma.CaseWhereInput>;
    officer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    officerId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AssignmentCountOrderByAggregateInput;
    _max?: Prisma.AssignmentMaxOrderByAggregateInput;
    _min?: Prisma.AssignmentMinOrderByAggregateInput;
};
export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssignmentScalarWhereWithAggregatesInput | Prisma.AssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssignmentScalarWhereWithAggregatesInput | Prisma.AssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    caseId?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    officerId?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    assignedById?: Prisma.StringWithAggregatesFilter<"Assignment"> | string;
    assignedAt?: Prisma.DateTimeWithAggregatesFilter<"Assignment"> | Date | string;
    unassignedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Assignment"> | Date | string | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"Assignment"> | string | null;
};
export type AssignmentCreateInput = {
    id?: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
    case: Prisma.CaseCreateNestedOneWithoutAssignmentsInput;
    officer: Prisma.UserCreateNestedOneWithoutAssignmentsInput;
    assignedBy: Prisma.UserCreateNestedOneWithoutAssignedAssignmentsInput;
};
export type AssignmentUncheckedCreateInput = {
    id?: string;
    caseId: string;
    officerId: string;
    assignedById: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
};
export type AssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    case?: Prisma.CaseUpdateOneRequiredWithoutAssignmentsNestedInput;
    officer?: Prisma.UserUpdateOneRequiredWithoutAssignmentsNestedInput;
    assignedBy?: Prisma.UserUpdateOneRequiredWithoutAssignedAssignmentsNestedInput;
};
export type AssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    officerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentCreateManyInput = {
    id?: string;
    caseId: string;
    officerId: string;
    assignedById: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
};
export type AssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    officerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentListRelationFilter = {
    every?: Prisma.AssignmentWhereInput;
    some?: Prisma.AssignmentWhereInput;
    none?: Prisma.AssignmentWhereInput;
};
export type AssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    officerId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type AssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    officerId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type AssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    officerId?: Prisma.SortOrder;
    assignedById?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    unassignedAt?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type AssignmentCreateNestedManyWithoutOfficerInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutOfficerInput, Prisma.AssignmentUncheckedCreateWithoutOfficerInput> | Prisma.AssignmentCreateWithoutOfficerInput[] | Prisma.AssignmentUncheckedCreateWithoutOfficerInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutOfficerInput | Prisma.AssignmentCreateOrConnectWithoutOfficerInput[];
    createMany?: Prisma.AssignmentCreateManyOfficerInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentCreateNestedManyWithoutAssignedByInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutAssignedByInput, Prisma.AssignmentUncheckedCreateWithoutAssignedByInput> | Prisma.AssignmentCreateWithoutAssignedByInput[] | Prisma.AssignmentUncheckedCreateWithoutAssignedByInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutAssignedByInput | Prisma.AssignmentCreateOrConnectWithoutAssignedByInput[];
    createMany?: Prisma.AssignmentCreateManyAssignedByInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutOfficerInput, Prisma.AssignmentUncheckedCreateWithoutOfficerInput> | Prisma.AssignmentCreateWithoutOfficerInput[] | Prisma.AssignmentUncheckedCreateWithoutOfficerInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutOfficerInput | Prisma.AssignmentCreateOrConnectWithoutOfficerInput[];
    createMany?: Prisma.AssignmentCreateManyOfficerInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutAssignedByInput, Prisma.AssignmentUncheckedCreateWithoutAssignedByInput> | Prisma.AssignmentCreateWithoutAssignedByInput[] | Prisma.AssignmentUncheckedCreateWithoutAssignedByInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutAssignedByInput | Prisma.AssignmentCreateOrConnectWithoutAssignedByInput[];
    createMany?: Prisma.AssignmentCreateManyAssignedByInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUpdateManyWithoutOfficerNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutOfficerInput, Prisma.AssignmentUncheckedCreateWithoutOfficerInput> | Prisma.AssignmentCreateWithoutOfficerInput[] | Prisma.AssignmentUncheckedCreateWithoutOfficerInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutOfficerInput | Prisma.AssignmentCreateOrConnectWithoutOfficerInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutOfficerInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutOfficerInput[];
    createMany?: Prisma.AssignmentCreateManyOfficerInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutOfficerInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutOfficerInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutOfficerInput | Prisma.AssignmentUpdateManyWithWhereWithoutOfficerInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUpdateManyWithoutAssignedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutAssignedByInput, Prisma.AssignmentUncheckedCreateWithoutAssignedByInput> | Prisma.AssignmentCreateWithoutAssignedByInput[] | Prisma.AssignmentUncheckedCreateWithoutAssignedByInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutAssignedByInput | Prisma.AssignmentCreateOrConnectWithoutAssignedByInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutAssignedByInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutAssignedByInput[];
    createMany?: Prisma.AssignmentCreateManyAssignedByInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutAssignedByInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutAssignedByInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutAssignedByInput | Prisma.AssignmentUpdateManyWithWhereWithoutAssignedByInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutOfficerInput, Prisma.AssignmentUncheckedCreateWithoutOfficerInput> | Prisma.AssignmentCreateWithoutOfficerInput[] | Prisma.AssignmentUncheckedCreateWithoutOfficerInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutOfficerInput | Prisma.AssignmentCreateOrConnectWithoutOfficerInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutOfficerInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutOfficerInput[];
    createMany?: Prisma.AssignmentCreateManyOfficerInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutOfficerInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutOfficerInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutOfficerInput | Prisma.AssignmentUpdateManyWithWhereWithoutOfficerInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutAssignedByInput, Prisma.AssignmentUncheckedCreateWithoutAssignedByInput> | Prisma.AssignmentCreateWithoutAssignedByInput[] | Prisma.AssignmentUncheckedCreateWithoutAssignedByInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutAssignedByInput | Prisma.AssignmentCreateOrConnectWithoutAssignedByInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutAssignedByInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutAssignedByInput[];
    createMany?: Prisma.AssignmentCreateManyAssignedByInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutAssignedByInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutAssignedByInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutAssignedByInput | Prisma.AssignmentUpdateManyWithWhereWithoutAssignedByInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentCreateNestedManyWithoutCaseInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutCaseInput, Prisma.AssignmentUncheckedCreateWithoutCaseInput> | Prisma.AssignmentCreateWithoutCaseInput[] | Prisma.AssignmentUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutCaseInput | Prisma.AssignmentCreateOrConnectWithoutCaseInput[];
    createMany?: Prisma.AssignmentCreateManyCaseInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUncheckedCreateNestedManyWithoutCaseInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutCaseInput, Prisma.AssignmentUncheckedCreateWithoutCaseInput> | Prisma.AssignmentCreateWithoutCaseInput[] | Prisma.AssignmentUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutCaseInput | Prisma.AssignmentCreateOrConnectWithoutCaseInput[];
    createMany?: Prisma.AssignmentCreateManyCaseInputEnvelope;
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
};
export type AssignmentUpdateManyWithoutCaseNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutCaseInput, Prisma.AssignmentUncheckedCreateWithoutCaseInput> | Prisma.AssignmentCreateWithoutCaseInput[] | Prisma.AssignmentUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutCaseInput | Prisma.AssignmentCreateOrConnectWithoutCaseInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutCaseInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutCaseInput[];
    createMany?: Prisma.AssignmentCreateManyCaseInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutCaseInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutCaseInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutCaseInput | Prisma.AssignmentUpdateManyWithWhereWithoutCaseInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: Prisma.XOR<Prisma.AssignmentCreateWithoutCaseInput, Prisma.AssignmentUncheckedCreateWithoutCaseInput> | Prisma.AssignmentCreateWithoutCaseInput[] | Prisma.AssignmentUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.AssignmentCreateOrConnectWithoutCaseInput | Prisma.AssignmentCreateOrConnectWithoutCaseInput[];
    upsert?: Prisma.AssignmentUpsertWithWhereUniqueWithoutCaseInput | Prisma.AssignmentUpsertWithWhereUniqueWithoutCaseInput[];
    createMany?: Prisma.AssignmentCreateManyCaseInputEnvelope;
    set?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    delete?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    connect?: Prisma.AssignmentWhereUniqueInput | Prisma.AssignmentWhereUniqueInput[];
    update?: Prisma.AssignmentUpdateWithWhereUniqueWithoutCaseInput | Prisma.AssignmentUpdateWithWhereUniqueWithoutCaseInput[];
    updateMany?: Prisma.AssignmentUpdateManyWithWhereWithoutCaseInput | Prisma.AssignmentUpdateManyWithWhereWithoutCaseInput[];
    deleteMany?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
};
export type AssignmentCreateWithoutOfficerInput = {
    id?: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
    case: Prisma.CaseCreateNestedOneWithoutAssignmentsInput;
    assignedBy: Prisma.UserCreateNestedOneWithoutAssignedAssignmentsInput;
};
export type AssignmentUncheckedCreateWithoutOfficerInput = {
    id?: string;
    caseId: string;
    assignedById: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
};
export type AssignmentCreateOrConnectWithoutOfficerInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutOfficerInput, Prisma.AssignmentUncheckedCreateWithoutOfficerInput>;
};
export type AssignmentCreateManyOfficerInputEnvelope = {
    data: Prisma.AssignmentCreateManyOfficerInput | Prisma.AssignmentCreateManyOfficerInput[];
    skipDuplicates?: boolean;
};
export type AssignmentCreateWithoutAssignedByInput = {
    id?: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
    case: Prisma.CaseCreateNestedOneWithoutAssignmentsInput;
    officer: Prisma.UserCreateNestedOneWithoutAssignmentsInput;
};
export type AssignmentUncheckedCreateWithoutAssignedByInput = {
    id?: string;
    caseId: string;
    officerId: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
};
export type AssignmentCreateOrConnectWithoutAssignedByInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutAssignedByInput, Prisma.AssignmentUncheckedCreateWithoutAssignedByInput>;
};
export type AssignmentCreateManyAssignedByInputEnvelope = {
    data: Prisma.AssignmentCreateManyAssignedByInput | Prisma.AssignmentCreateManyAssignedByInput[];
    skipDuplicates?: boolean;
};
export type AssignmentUpsertWithWhereUniqueWithoutOfficerInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutOfficerInput, Prisma.AssignmentUncheckedUpdateWithoutOfficerInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutOfficerInput, Prisma.AssignmentUncheckedCreateWithoutOfficerInput>;
};
export type AssignmentUpdateWithWhereUniqueWithoutOfficerInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutOfficerInput, Prisma.AssignmentUncheckedUpdateWithoutOfficerInput>;
};
export type AssignmentUpdateManyWithWhereWithoutOfficerInput = {
    where: Prisma.AssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyWithoutOfficerInput>;
};
export type AssignmentScalarWhereInput = {
    AND?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
    OR?: Prisma.AssignmentScalarWhereInput[];
    NOT?: Prisma.AssignmentScalarWhereInput | Prisma.AssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Assignment"> | string;
    caseId?: Prisma.StringFilter<"Assignment"> | string;
    officerId?: Prisma.StringFilter<"Assignment"> | string;
    assignedById?: Prisma.StringFilter<"Assignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"Assignment"> | Date | string;
    unassignedAt?: Prisma.DateTimeNullableFilter<"Assignment"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"Assignment"> | string | null;
};
export type AssignmentUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutAssignedByInput, Prisma.AssignmentUncheckedUpdateWithoutAssignedByInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutAssignedByInput, Prisma.AssignmentUncheckedCreateWithoutAssignedByInput>;
};
export type AssignmentUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutAssignedByInput, Prisma.AssignmentUncheckedUpdateWithoutAssignedByInput>;
};
export type AssignmentUpdateManyWithWhereWithoutAssignedByInput = {
    where: Prisma.AssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByInput>;
};
export type AssignmentCreateWithoutCaseInput = {
    id?: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
    officer: Prisma.UserCreateNestedOneWithoutAssignmentsInput;
    assignedBy: Prisma.UserCreateNestedOneWithoutAssignedAssignmentsInput;
};
export type AssignmentUncheckedCreateWithoutCaseInput = {
    id?: string;
    officerId: string;
    assignedById: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
};
export type AssignmentCreateOrConnectWithoutCaseInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutCaseInput, Prisma.AssignmentUncheckedCreateWithoutCaseInput>;
};
export type AssignmentCreateManyCaseInputEnvelope = {
    data: Prisma.AssignmentCreateManyCaseInput | Prisma.AssignmentCreateManyCaseInput[];
    skipDuplicates?: boolean;
};
export type AssignmentUpsertWithWhereUniqueWithoutCaseInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssignmentUpdateWithoutCaseInput, Prisma.AssignmentUncheckedUpdateWithoutCaseInput>;
    create: Prisma.XOR<Prisma.AssignmentCreateWithoutCaseInput, Prisma.AssignmentUncheckedCreateWithoutCaseInput>;
};
export type AssignmentUpdateWithWhereUniqueWithoutCaseInput = {
    where: Prisma.AssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateWithoutCaseInput, Prisma.AssignmentUncheckedUpdateWithoutCaseInput>;
};
export type AssignmentUpdateManyWithWhereWithoutCaseInput = {
    where: Prisma.AssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyWithoutCaseInput>;
};
export type AssignmentCreateManyOfficerInput = {
    id?: string;
    caseId: string;
    assignedById: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
};
export type AssignmentCreateManyAssignedByInput = {
    id?: string;
    caseId: string;
    officerId: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
};
export type AssignmentUpdateWithoutOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    case?: Prisma.CaseUpdateOneRequiredWithoutAssignmentsNestedInput;
    assignedBy?: Prisma.UserUpdateOneRequiredWithoutAssignedAssignmentsNestedInput;
};
export type AssignmentUncheckedUpdateWithoutOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentUncheckedUpdateManyWithoutOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentUpdateWithoutAssignedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    case?: Prisma.CaseUpdateOneRequiredWithoutAssignmentsNestedInput;
    officer?: Prisma.UserUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type AssignmentUncheckedUpdateWithoutAssignedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    officerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentUncheckedUpdateManyWithoutAssignedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    officerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentCreateManyCaseInput = {
    id?: string;
    officerId: string;
    assignedById: string;
    assignedAt?: Date | string;
    unassignedAt?: Date | string | null;
    reason?: string | null;
};
export type AssignmentUpdateWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    officer?: Prisma.UserUpdateOneRequiredWithoutAssignmentsNestedInput;
    assignedBy?: Prisma.UserUpdateOneRequiredWithoutAssignedAssignmentsNestedInput;
};
export type AssignmentUncheckedUpdateWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    officerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentUncheckedUpdateManyWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    officerId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unassignedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    officerId?: boolean;
    assignedById?: boolean;
    assignedAt?: boolean;
    unassignedAt?: boolean;
    reason?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    officer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    officerId?: boolean;
    assignedById?: boolean;
    assignedAt?: boolean;
    unassignedAt?: boolean;
    reason?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    officer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    officerId?: boolean;
    assignedById?: boolean;
    assignedAt?: boolean;
    unassignedAt?: boolean;
    reason?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    officer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assignment"]>;
export type AssignmentSelectScalar = {
    id?: boolean;
    caseId?: boolean;
    officerId?: boolean;
    assignedById?: boolean;
    assignedAt?: boolean;
    unassignedAt?: boolean;
    reason?: boolean;
};
export type AssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "caseId" | "officerId" | "assignedById" | "assignedAt" | "unassignedAt" | "reason", ExtArgs["result"]["assignment"]>;
export type AssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    officer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    officer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    officer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Assignment";
    objects: {
        case: Prisma.$CasePayload<ExtArgs>;
        officer: Prisma.$UserPayload<ExtArgs>;
        assignedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        caseId: string;
        officerId: string;
        assignedById: string;
        assignedAt: Date;
        unassignedAt: Date | null;
        reason: string | null;
    }, ExtArgs["result"]["assignment"]>;
    composites: {};
};
export type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssignmentPayload, S>;
export type AssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssignmentCountAggregateInputType | true;
};
export interface AssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Assignment'];
        meta: {
            name: 'Assignment';
        };
    };
    findUnique<T extends AssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssignmentCreateArgs>(args: Prisma.SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssignmentDeleteArgs>(args: Prisma.SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssignmentUpdateArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssignmentUpsertArgs>(args: Prisma.SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssignmentCountArgs>(args?: Prisma.Subset<T, AssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssignmentCountAggregateOutputType> : number>;
    aggregate<T extends AssignmentAggregateArgs>(args: Prisma.Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>;
    groupBy<T extends AssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssignmentFieldRefs;
}
export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    case<T extends Prisma.CaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CaseDefaultArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    officer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"Assignment", 'String'>;
    readonly caseId: Prisma.FieldRef<"Assignment", 'String'>;
    readonly officerId: Prisma.FieldRef<"Assignment", 'String'>;
    readonly assignedById: Prisma.FieldRef<"Assignment", 'String'>;
    readonly assignedAt: Prisma.FieldRef<"Assignment", 'DateTime'>;
    readonly unassignedAt: Prisma.FieldRef<"Assignment", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"Assignment", 'String'>;
}
export type AssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssignmentWhereInput;
    orderBy?: Prisma.AssignmentOrderByWithRelationInput | Prisma.AssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssignmentScalarFieldEnum | Prisma.AssignmentScalarFieldEnum[];
};
export type AssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentCreateInput, Prisma.AssignmentUncheckedCreateInput>;
};
export type AssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssignmentCreateManyInput | Prisma.AssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    data: Prisma.AssignmentCreateManyInput | Prisma.AssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentUpdateInput, Prisma.AssignmentUncheckedUpdateInput>;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyInput>;
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
};
export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssignmentUpdateManyMutationInput, Prisma.AssignmentUncheckedUpdateManyInput>;
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
    include?: Prisma.AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssignmentCreateInput, Prisma.AssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssignmentUpdateInput, Prisma.AssignmentUncheckedUpdateInput>;
};
export type AssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
    where: Prisma.AssignmentWhereUniqueInput;
};
export type AssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
    limit?: number;
};
export type AssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssignmentInclude<ExtArgs> | null;
};
