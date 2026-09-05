import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type CaseModel = runtime.Types.Result.DefaultSelection<Prisma.$CasePayload>;
export type AggregateCase = {
    _count: CaseCountAggregateOutputType | null;
    _min: CaseMinAggregateOutputType | null;
    _max: CaseMaxAggregateOutputType | null;
};
export type CaseMinAggregateOutputType = {
    id: string | null;
    caseNumber: string | null;
    citizenId: string | null;
    assignedOfficerId: string | null;
    category: string | null;
    description: string | null;
    district: string | null;
    priority: $Enums.CasePriority | null;
    currentStatus: $Enums.CaseStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    closedAt: Date | null;
};
export type CaseMaxAggregateOutputType = {
    id: string | null;
    caseNumber: string | null;
    citizenId: string | null;
    assignedOfficerId: string | null;
    category: string | null;
    description: string | null;
    district: string | null;
    priority: $Enums.CasePriority | null;
    currentStatus: $Enums.CaseStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    closedAt: Date | null;
};
export type CaseCountAggregateOutputType = {
    id: number;
    caseNumber: number;
    citizenId: number;
    assignedOfficerId: number;
    category: number;
    description: number;
    district: number;
    priority: number;
    currentStatus: number;
    createdAt: number;
    updatedAt: number;
    closedAt: number;
    _all: number;
};
export type CaseMinAggregateInputType = {
    id?: true;
    caseNumber?: true;
    citizenId?: true;
    assignedOfficerId?: true;
    category?: true;
    description?: true;
    district?: true;
    priority?: true;
    currentStatus?: true;
    createdAt?: true;
    updatedAt?: true;
    closedAt?: true;
};
export type CaseMaxAggregateInputType = {
    id?: true;
    caseNumber?: true;
    citizenId?: true;
    assignedOfficerId?: true;
    category?: true;
    description?: true;
    district?: true;
    priority?: true;
    currentStatus?: true;
    createdAt?: true;
    updatedAt?: true;
    closedAt?: true;
};
export type CaseCountAggregateInputType = {
    id?: true;
    caseNumber?: true;
    citizenId?: true;
    assignedOfficerId?: true;
    category?: true;
    description?: true;
    district?: true;
    priority?: true;
    currentStatus?: true;
    createdAt?: true;
    updatedAt?: true;
    closedAt?: true;
    _all?: true;
};
export type CaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseWhereInput;
    orderBy?: Prisma.CaseOrderByWithRelationInput | Prisma.CaseOrderByWithRelationInput[];
    cursor?: Prisma.CaseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CaseCountAggregateInputType;
    _min?: CaseMinAggregateInputType;
    _max?: CaseMaxAggregateInputType;
};
export type GetCaseAggregateType<T extends CaseAggregateArgs> = {
    [P in keyof T & keyof AggregateCase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCase[P]> : Prisma.GetScalarType<T[P], AggregateCase[P]>;
};
export type CaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseWhereInput;
    orderBy?: Prisma.CaseOrderByWithAggregationInput | Prisma.CaseOrderByWithAggregationInput[];
    by: Prisma.CaseScalarFieldEnum[] | Prisma.CaseScalarFieldEnum;
    having?: Prisma.CaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CaseCountAggregateInputType | true;
    _min?: CaseMinAggregateInputType;
    _max?: CaseMaxAggregateInputType;
};
export type CaseGroupByOutputType = {
    id: string;
    caseNumber: string;
    citizenId: string;
    assignedOfficerId: string | null;
    category: string;
    description: string;
    district: string | null;
    priority: $Enums.CasePriority;
    currentStatus: $Enums.CaseStatus;
    createdAt: Date;
    updatedAt: Date;
    closedAt: Date | null;
    _count: CaseCountAggregateOutputType | null;
    _min: CaseMinAggregateOutputType | null;
    _max: CaseMaxAggregateOutputType | null;
};
export type GetCaseGroupByPayload<T extends CaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CaseGroupByOutputType[P]>;
}>>;
export type CaseWhereInput = {
    AND?: Prisma.CaseWhereInput | Prisma.CaseWhereInput[];
    OR?: Prisma.CaseWhereInput[];
    NOT?: Prisma.CaseWhereInput | Prisma.CaseWhereInput[];
    id?: Prisma.StringFilter<"Case"> | string;
    caseNumber?: Prisma.StringFilter<"Case"> | string;
    citizenId?: Prisma.StringFilter<"Case"> | string;
    assignedOfficerId?: Prisma.StringNullableFilter<"Case"> | string | null;
    category?: Prisma.StringFilter<"Case"> | string;
    description?: Prisma.StringFilter<"Case"> | string;
    district?: Prisma.StringNullableFilter<"Case"> | string | null;
    priority?: Prisma.EnumCasePriorityFilter<"Case"> | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFilter<"Case"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Case"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"Case"> | Date | string | null;
    citizen?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignedOfficer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    assignments?: Prisma.AssignmentListRelationFilter;
    history?: Prisma.CaseHistoryListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type CaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    caseNumber?: Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    assignedOfficerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    district?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    citizen?: Prisma.UserOrderByWithRelationInput;
    assignedOfficer?: Prisma.UserOrderByWithRelationInput;
    assignments?: Prisma.AssignmentOrderByRelationAggregateInput;
    history?: Prisma.CaseHistoryOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    attachments?: Prisma.AttachmentOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type CaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    caseNumber?: string;
    AND?: Prisma.CaseWhereInput | Prisma.CaseWhereInput[];
    OR?: Prisma.CaseWhereInput[];
    NOT?: Prisma.CaseWhereInput | Prisma.CaseWhereInput[];
    citizenId?: Prisma.StringFilter<"Case"> | string;
    assignedOfficerId?: Prisma.StringNullableFilter<"Case"> | string | null;
    category?: Prisma.StringFilter<"Case"> | string;
    description?: Prisma.StringFilter<"Case"> | string;
    district?: Prisma.StringNullableFilter<"Case"> | string | null;
    priority?: Prisma.EnumCasePriorityFilter<"Case"> | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFilter<"Case"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Case"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"Case"> | Date | string | null;
    citizen?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignedOfficer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    assignments?: Prisma.AssignmentListRelationFilter;
    history?: Prisma.CaseHistoryListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id" | "caseNumber">;
export type CaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    caseNumber?: Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    assignedOfficerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    district?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CaseCountOrderByAggregateInput;
    _max?: Prisma.CaseMaxOrderByAggregateInput;
    _min?: Prisma.CaseMinOrderByAggregateInput;
};
export type CaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.CaseScalarWhereWithAggregatesInput | Prisma.CaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.CaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CaseScalarWhereWithAggregatesInput | Prisma.CaseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Case"> | string;
    caseNumber?: Prisma.StringWithAggregatesFilter<"Case"> | string;
    citizenId?: Prisma.StringWithAggregatesFilter<"Case"> | string;
    assignedOfficerId?: Prisma.StringNullableWithAggregatesFilter<"Case"> | string | null;
    category?: Prisma.StringWithAggregatesFilter<"Case"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Case"> | string;
    district?: Prisma.StringNullableWithAggregatesFilter<"Case"> | string | null;
    priority?: Prisma.EnumCasePriorityWithAggregatesFilter<"Case"> | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusWithAggregatesFilter<"Case"> | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Case"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Case"> | Date | string;
    closedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null;
};
export type CaseCreateInput = {
    id?: string;
    caseNumber: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    citizen: Prisma.UserCreateNestedOneWithoutCitizenCasesInput;
    assignedOfficer?: Prisma.UserCreateNestedOneWithoutAssignedCasesInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCaseInput;
};
export type CaseUncheckedCreateInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citizen?: Prisma.UserUpdateOneRequiredWithoutCitizenCasesNestedInput;
    assignedOfficer?: Prisma.UserUpdateOneWithoutAssignedCasesNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUncheckedUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseCreateManyInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
};
export type CaseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CaseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CaseListRelationFilter = {
    every?: Prisma.CaseWhereInput;
    some?: Prisma.CaseWhereInput;
    none?: Prisma.CaseWhereInput;
};
export type CaseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseNumber?: Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    assignedOfficerId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
};
export type CaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseNumber?: Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    assignedOfficerId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
};
export type CaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseNumber?: Prisma.SortOrder;
    citizenId?: Prisma.SortOrder;
    assignedOfficerId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    currentStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
};
export type CaseScalarRelationFilter = {
    is?: Prisma.CaseWhereInput;
    isNot?: Prisma.CaseWhereInput;
};
export type CaseNullableScalarRelationFilter = {
    is?: Prisma.CaseWhereInput | null;
    isNot?: Prisma.CaseWhereInput | null;
};
export type CaseCreateNestedManyWithoutCitizenInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutCitizenInput, Prisma.CaseUncheckedCreateWithoutCitizenInput> | Prisma.CaseCreateWithoutCitizenInput[] | Prisma.CaseUncheckedCreateWithoutCitizenInput[];
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutCitizenInput | Prisma.CaseCreateOrConnectWithoutCitizenInput[];
    createMany?: Prisma.CaseCreateManyCitizenInputEnvelope;
    connect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
};
export type CaseCreateNestedManyWithoutAssignedOfficerInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAssignedOfficerInput, Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput> | Prisma.CaseCreateWithoutAssignedOfficerInput[] | Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput[];
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAssignedOfficerInput | Prisma.CaseCreateOrConnectWithoutAssignedOfficerInput[];
    createMany?: Prisma.CaseCreateManyAssignedOfficerInputEnvelope;
    connect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
};
export type CaseUncheckedCreateNestedManyWithoutCitizenInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutCitizenInput, Prisma.CaseUncheckedCreateWithoutCitizenInput> | Prisma.CaseCreateWithoutCitizenInput[] | Prisma.CaseUncheckedCreateWithoutCitizenInput[];
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutCitizenInput | Prisma.CaseCreateOrConnectWithoutCitizenInput[];
    createMany?: Prisma.CaseCreateManyCitizenInputEnvelope;
    connect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
};
export type CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAssignedOfficerInput, Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput> | Prisma.CaseCreateWithoutAssignedOfficerInput[] | Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput[];
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAssignedOfficerInput | Prisma.CaseCreateOrConnectWithoutAssignedOfficerInput[];
    createMany?: Prisma.CaseCreateManyAssignedOfficerInputEnvelope;
    connect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
};
export type CaseUpdateManyWithoutCitizenNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutCitizenInput, Prisma.CaseUncheckedCreateWithoutCitizenInput> | Prisma.CaseCreateWithoutCitizenInput[] | Prisma.CaseUncheckedCreateWithoutCitizenInput[];
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutCitizenInput | Prisma.CaseCreateOrConnectWithoutCitizenInput[];
    upsert?: Prisma.CaseUpsertWithWhereUniqueWithoutCitizenInput | Prisma.CaseUpsertWithWhereUniqueWithoutCitizenInput[];
    createMany?: Prisma.CaseCreateManyCitizenInputEnvelope;
    set?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    disconnect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    delete?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    connect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    update?: Prisma.CaseUpdateWithWhereUniqueWithoutCitizenInput | Prisma.CaseUpdateWithWhereUniqueWithoutCitizenInput[];
    updateMany?: Prisma.CaseUpdateManyWithWhereWithoutCitizenInput | Prisma.CaseUpdateManyWithWhereWithoutCitizenInput[];
    deleteMany?: Prisma.CaseScalarWhereInput | Prisma.CaseScalarWhereInput[];
};
export type CaseUpdateManyWithoutAssignedOfficerNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAssignedOfficerInput, Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput> | Prisma.CaseCreateWithoutAssignedOfficerInput[] | Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput[];
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAssignedOfficerInput | Prisma.CaseCreateOrConnectWithoutAssignedOfficerInput[];
    upsert?: Prisma.CaseUpsertWithWhereUniqueWithoutAssignedOfficerInput | Prisma.CaseUpsertWithWhereUniqueWithoutAssignedOfficerInput[];
    createMany?: Prisma.CaseCreateManyAssignedOfficerInputEnvelope;
    set?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    disconnect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    delete?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    connect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    update?: Prisma.CaseUpdateWithWhereUniqueWithoutAssignedOfficerInput | Prisma.CaseUpdateWithWhereUniqueWithoutAssignedOfficerInput[];
    updateMany?: Prisma.CaseUpdateManyWithWhereWithoutAssignedOfficerInput | Prisma.CaseUpdateManyWithWhereWithoutAssignedOfficerInput[];
    deleteMany?: Prisma.CaseScalarWhereInput | Prisma.CaseScalarWhereInput[];
};
export type CaseUncheckedUpdateManyWithoutCitizenNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutCitizenInput, Prisma.CaseUncheckedCreateWithoutCitizenInput> | Prisma.CaseCreateWithoutCitizenInput[] | Prisma.CaseUncheckedCreateWithoutCitizenInput[];
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutCitizenInput | Prisma.CaseCreateOrConnectWithoutCitizenInput[];
    upsert?: Prisma.CaseUpsertWithWhereUniqueWithoutCitizenInput | Prisma.CaseUpsertWithWhereUniqueWithoutCitizenInput[];
    createMany?: Prisma.CaseCreateManyCitizenInputEnvelope;
    set?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    disconnect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    delete?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    connect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    update?: Prisma.CaseUpdateWithWhereUniqueWithoutCitizenInput | Prisma.CaseUpdateWithWhereUniqueWithoutCitizenInput[];
    updateMany?: Prisma.CaseUpdateManyWithWhereWithoutCitizenInput | Prisma.CaseUpdateManyWithWhereWithoutCitizenInput[];
    deleteMany?: Prisma.CaseScalarWhereInput | Prisma.CaseScalarWhereInput[];
};
export type CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAssignedOfficerInput, Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput> | Prisma.CaseCreateWithoutAssignedOfficerInput[] | Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput[];
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAssignedOfficerInput | Prisma.CaseCreateOrConnectWithoutAssignedOfficerInput[];
    upsert?: Prisma.CaseUpsertWithWhereUniqueWithoutAssignedOfficerInput | Prisma.CaseUpsertWithWhereUniqueWithoutAssignedOfficerInput[];
    createMany?: Prisma.CaseCreateManyAssignedOfficerInputEnvelope;
    set?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    disconnect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    delete?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    connect?: Prisma.CaseWhereUniqueInput | Prisma.CaseWhereUniqueInput[];
    update?: Prisma.CaseUpdateWithWhereUniqueWithoutAssignedOfficerInput | Prisma.CaseUpdateWithWhereUniqueWithoutAssignedOfficerInput[];
    updateMany?: Prisma.CaseUpdateManyWithWhereWithoutAssignedOfficerInput | Prisma.CaseUpdateManyWithWhereWithoutAssignedOfficerInput[];
    deleteMany?: Prisma.CaseScalarWhereInput | Prisma.CaseScalarWhereInput[];
};
export type EnumCasePriorityFieldUpdateOperationsInput = {
    set?: $Enums.CasePriority;
};
export type EnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type CaseCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAssignmentsInput, Prisma.CaseUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.CaseWhereUniqueInput;
};
export type CaseUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAssignmentsInput, Prisma.CaseUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.CaseUpsertWithoutAssignmentsInput;
    connect?: Prisma.CaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CaseUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.CaseUpdateWithoutAssignmentsInput>, Prisma.CaseUncheckedUpdateWithoutAssignmentsInput>;
};
export type CaseCreateNestedOneWithoutHistoryInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutHistoryInput, Prisma.CaseUncheckedCreateWithoutHistoryInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutHistoryInput;
    connect?: Prisma.CaseWhereUniqueInput;
};
export type CaseUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutHistoryInput, Prisma.CaseUncheckedCreateWithoutHistoryInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutHistoryInput;
    upsert?: Prisma.CaseUpsertWithoutHistoryInput;
    connect?: Prisma.CaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CaseUpdateToOneWithWhereWithoutHistoryInput, Prisma.CaseUpdateWithoutHistoryInput>, Prisma.CaseUncheckedUpdateWithoutHistoryInput>;
};
export type CaseCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutNotificationsInput, Prisma.CaseUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.CaseWhereUniqueInput;
};
export type CaseUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutNotificationsInput, Prisma.CaseUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.CaseUpsertWithoutNotificationsInput;
    disconnect?: Prisma.CaseWhereInput | boolean;
    delete?: Prisma.CaseWhereInput | boolean;
    connect?: Prisma.CaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CaseUpdateToOneWithWhereWithoutNotificationsInput, Prisma.CaseUpdateWithoutNotificationsInput>, Prisma.CaseUncheckedUpdateWithoutNotificationsInput>;
};
export type CaseCreateNestedOneWithoutAttachmentsInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAttachmentsInput, Prisma.CaseUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAttachmentsInput;
    connect?: Prisma.CaseWhereUniqueInput;
};
export type CaseUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAttachmentsInput, Prisma.CaseUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAttachmentsInput;
    upsert?: Prisma.CaseUpsertWithoutAttachmentsInput;
    connect?: Prisma.CaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CaseUpdateToOneWithWhereWithoutAttachmentsInput, Prisma.CaseUpdateWithoutAttachmentsInput>, Prisma.CaseUncheckedUpdateWithoutAttachmentsInput>;
};
export type CaseCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAuditLogsInput, Prisma.CaseUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.CaseWhereUniqueInput;
};
export type CaseUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.CaseCreateWithoutAuditLogsInput, Prisma.CaseUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.CaseCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.CaseUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.CaseWhereInput | boolean;
    delete?: Prisma.CaseWhereInput | boolean;
    connect?: Prisma.CaseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CaseUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.CaseUpdateWithoutAuditLogsInput>, Prisma.CaseUncheckedUpdateWithoutAuditLogsInput>;
};
export type CaseCreateWithoutCitizenInput = {
    id?: string;
    caseNumber: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    assignedOfficer?: Prisma.UserCreateNestedOneWithoutAssignedCasesInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCaseInput;
};
export type CaseUncheckedCreateWithoutCitizenInput = {
    id?: string;
    caseNumber: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseCreateOrConnectWithoutCitizenInput = {
    where: Prisma.CaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseCreateWithoutCitizenInput, Prisma.CaseUncheckedCreateWithoutCitizenInput>;
};
export type CaseCreateManyCitizenInputEnvelope = {
    data: Prisma.CaseCreateManyCitizenInput | Prisma.CaseCreateManyCitizenInput[];
    skipDuplicates?: boolean;
};
export type CaseCreateWithoutAssignedOfficerInput = {
    id?: string;
    caseNumber: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    citizen: Prisma.UserCreateNestedOneWithoutCitizenCasesInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCaseInput;
};
export type CaseUncheckedCreateWithoutAssignedOfficerInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseCreateOrConnectWithoutAssignedOfficerInput = {
    where: Prisma.CaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseCreateWithoutAssignedOfficerInput, Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput>;
};
export type CaseCreateManyAssignedOfficerInputEnvelope = {
    data: Prisma.CaseCreateManyAssignedOfficerInput | Prisma.CaseCreateManyAssignedOfficerInput[];
    skipDuplicates?: boolean;
};
export type CaseUpsertWithWhereUniqueWithoutCitizenInput = {
    where: Prisma.CaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CaseUpdateWithoutCitizenInput, Prisma.CaseUncheckedUpdateWithoutCitizenInput>;
    create: Prisma.XOR<Prisma.CaseCreateWithoutCitizenInput, Prisma.CaseUncheckedCreateWithoutCitizenInput>;
};
export type CaseUpdateWithWhereUniqueWithoutCitizenInput = {
    where: Prisma.CaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CaseUpdateWithoutCitizenInput, Prisma.CaseUncheckedUpdateWithoutCitizenInput>;
};
export type CaseUpdateManyWithWhereWithoutCitizenInput = {
    where: Prisma.CaseScalarWhereInput;
    data: Prisma.XOR<Prisma.CaseUpdateManyMutationInput, Prisma.CaseUncheckedUpdateManyWithoutCitizenInput>;
};
export type CaseScalarWhereInput = {
    AND?: Prisma.CaseScalarWhereInput | Prisma.CaseScalarWhereInput[];
    OR?: Prisma.CaseScalarWhereInput[];
    NOT?: Prisma.CaseScalarWhereInput | Prisma.CaseScalarWhereInput[];
    id?: Prisma.StringFilter<"Case"> | string;
    caseNumber?: Prisma.StringFilter<"Case"> | string;
    citizenId?: Prisma.StringFilter<"Case"> | string;
    assignedOfficerId?: Prisma.StringNullableFilter<"Case"> | string | null;
    category?: Prisma.StringFilter<"Case"> | string;
    description?: Prisma.StringFilter<"Case"> | string;
    district?: Prisma.StringNullableFilter<"Case"> | string | null;
    priority?: Prisma.EnumCasePriorityFilter<"Case"> | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFilter<"Case"> | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFilter<"Case"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Case"> | Date | string;
    closedAt?: Prisma.DateTimeNullableFilter<"Case"> | Date | string | null;
};
export type CaseUpsertWithWhereUniqueWithoutAssignedOfficerInput = {
    where: Prisma.CaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CaseUpdateWithoutAssignedOfficerInput, Prisma.CaseUncheckedUpdateWithoutAssignedOfficerInput>;
    create: Prisma.XOR<Prisma.CaseCreateWithoutAssignedOfficerInput, Prisma.CaseUncheckedCreateWithoutAssignedOfficerInput>;
};
export type CaseUpdateWithWhereUniqueWithoutAssignedOfficerInput = {
    where: Prisma.CaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CaseUpdateWithoutAssignedOfficerInput, Prisma.CaseUncheckedUpdateWithoutAssignedOfficerInput>;
};
export type CaseUpdateManyWithWhereWithoutAssignedOfficerInput = {
    where: Prisma.CaseScalarWhereInput;
    data: Prisma.XOR<Prisma.CaseUpdateManyMutationInput, Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerInput>;
};
export type CaseCreateWithoutAssignmentsInput = {
    id?: string;
    caseNumber: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    citizen: Prisma.UserCreateNestedOneWithoutCitizenCasesInput;
    assignedOfficer?: Prisma.UserCreateNestedOneWithoutAssignedCasesInput;
    history?: Prisma.CaseHistoryCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCaseInput;
};
export type CaseUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    history?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.CaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseCreateWithoutAssignmentsInput, Prisma.CaseUncheckedCreateWithoutAssignmentsInput>;
};
export type CaseUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.CaseUpdateWithoutAssignmentsInput, Prisma.CaseUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.CaseCreateWithoutAssignmentsInput, Prisma.CaseUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.CaseWhereInput;
};
export type CaseUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.CaseWhereInput;
    data: Prisma.XOR<Prisma.CaseUpdateWithoutAssignmentsInput, Prisma.CaseUncheckedUpdateWithoutAssignmentsInput>;
};
export type CaseUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citizen?: Prisma.UserUpdateOneRequiredWithoutCitizenCasesNestedInput;
    assignedOfficer?: Prisma.UserUpdateOneWithoutAssignedCasesNestedInput;
    history?: Prisma.CaseHistoryUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    history?: Prisma.CaseHistoryUncheckedUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseCreateWithoutHistoryInput = {
    id?: string;
    caseNumber: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    citizen: Prisma.UserCreateNestedOneWithoutCitizenCasesInput;
    assignedOfficer?: Prisma.UserCreateNestedOneWithoutAssignedCasesInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCaseInput;
};
export type CaseUncheckedCreateWithoutHistoryInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseCreateOrConnectWithoutHistoryInput = {
    where: Prisma.CaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseCreateWithoutHistoryInput, Prisma.CaseUncheckedCreateWithoutHistoryInput>;
};
export type CaseUpsertWithoutHistoryInput = {
    update: Prisma.XOR<Prisma.CaseUpdateWithoutHistoryInput, Prisma.CaseUncheckedUpdateWithoutHistoryInput>;
    create: Prisma.XOR<Prisma.CaseCreateWithoutHistoryInput, Prisma.CaseUncheckedCreateWithoutHistoryInput>;
    where?: Prisma.CaseWhereInput;
};
export type CaseUpdateToOneWithWhereWithoutHistoryInput = {
    where?: Prisma.CaseWhereInput;
    data: Prisma.XOR<Prisma.CaseUpdateWithoutHistoryInput, Prisma.CaseUncheckedUpdateWithoutHistoryInput>;
};
export type CaseUpdateWithoutHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citizen?: Prisma.UserUpdateOneRequiredWithoutCitizenCasesNestedInput;
    assignedOfficer?: Prisma.UserUpdateOneWithoutAssignedCasesNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateWithoutHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseCreateWithoutNotificationsInput = {
    id?: string;
    caseNumber: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    citizen: Prisma.UserCreateNestedOneWithoutCitizenCasesInput;
    assignedOfficer?: Prisma.UserCreateNestedOneWithoutAssignedCasesInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCaseInput;
};
export type CaseUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.CaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseCreateWithoutNotificationsInput, Prisma.CaseUncheckedCreateWithoutNotificationsInput>;
};
export type CaseUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.CaseUpdateWithoutNotificationsInput, Prisma.CaseUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.CaseCreateWithoutNotificationsInput, Prisma.CaseUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.CaseWhereInput;
};
export type CaseUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.CaseWhereInput;
    data: Prisma.XOR<Prisma.CaseUpdateWithoutNotificationsInput, Prisma.CaseUncheckedUpdateWithoutNotificationsInput>;
};
export type CaseUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citizen?: Prisma.UserUpdateOneRequiredWithoutCitizenCasesNestedInput;
    assignedOfficer?: Prisma.UserUpdateOneWithoutAssignedCasesNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUncheckedUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseCreateWithoutAttachmentsInput = {
    id?: string;
    caseNumber: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    citizen: Prisma.UserCreateNestedOneWithoutCitizenCasesInput;
    assignedOfficer?: Prisma.UserCreateNestedOneWithoutAssignedCasesInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCaseInput;
};
export type CaseUncheckedCreateWithoutAttachmentsInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutCaseInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseCreateOrConnectWithoutAttachmentsInput = {
    where: Prisma.CaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseCreateWithoutAttachmentsInput, Prisma.CaseUncheckedCreateWithoutAttachmentsInput>;
};
export type CaseUpsertWithoutAttachmentsInput = {
    update: Prisma.XOR<Prisma.CaseUpdateWithoutAttachmentsInput, Prisma.CaseUncheckedUpdateWithoutAttachmentsInput>;
    create: Prisma.XOR<Prisma.CaseCreateWithoutAttachmentsInput, Prisma.CaseUncheckedCreateWithoutAttachmentsInput>;
    where?: Prisma.CaseWhereInput;
};
export type CaseUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: Prisma.CaseWhereInput;
    data: Prisma.XOR<Prisma.CaseUpdateWithoutAttachmentsInput, Prisma.CaseUncheckedUpdateWithoutAttachmentsInput>;
};
export type CaseUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citizen?: Prisma.UserUpdateOneRequiredWithoutCitizenCasesNestedInput;
    assignedOfficer?: Prisma.UserUpdateOneWithoutAssignedCasesNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUncheckedUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseCreateWithoutAuditLogsInput = {
    id?: string;
    caseNumber: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    citizen: Prisma.UserCreateNestedOneWithoutCitizenCasesInput;
    assignedOfficer?: Prisma.UserCreateNestedOneWithoutAssignedCasesInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutCaseInput;
};
export type CaseUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutCaseInput;
    history?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutCaseInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutCaseInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutCaseInput;
};
export type CaseCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.CaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseCreateWithoutAuditLogsInput, Prisma.CaseUncheckedCreateWithoutAuditLogsInput>;
};
export type CaseUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.CaseUpdateWithoutAuditLogsInput, Prisma.CaseUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.CaseCreateWithoutAuditLogsInput, Prisma.CaseUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.CaseWhereInput;
};
export type CaseUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.CaseWhereInput;
    data: Prisma.XOR<Prisma.CaseUpdateWithoutAuditLogsInput, Prisma.CaseUncheckedUpdateWithoutAuditLogsInput>;
};
export type CaseUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citizen?: Prisma.UserUpdateOneRequiredWithoutCitizenCasesNestedInput;
    assignedOfficer?: Prisma.UserUpdateOneWithoutAssignedCasesNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUncheckedUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseCreateManyCitizenInput = {
    id?: string;
    caseNumber: string;
    assignedOfficerId?: string | null;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
};
export type CaseCreateManyAssignedOfficerInput = {
    id?: string;
    caseNumber: string;
    citizenId: string;
    category: string;
    description: string;
    district?: string | null;
    priority?: $Enums.CasePriority;
    currentStatus?: $Enums.CaseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    closedAt?: Date | string | null;
};
export type CaseUpdateWithoutCitizenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedOfficer?: Prisma.UserUpdateOneWithoutAssignedCasesNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateWithoutCitizenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUncheckedUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateManyWithoutCitizenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedOfficerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CaseUpdateWithoutAssignedOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    citizen?: Prisma.UserUpdateOneRequiredWithoutCitizenCasesNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateWithoutAssignedOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutCaseNestedInput;
    history?: Prisma.CaseHistoryUncheckedUpdateManyWithoutCaseNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutCaseNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutCaseNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCaseNestedInput;
};
export type CaseUncheckedUpdateManyWithoutAssignedOfficerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    citizenId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.EnumCasePriorityFieldUpdateOperationsInput | $Enums.CasePriority;
    currentStatus?: Prisma.EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CaseCountOutputType = {
    assignments: number;
    history: number;
    notifications: number;
    attachments: number;
    auditLogs: number;
};
export type CaseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignments?: boolean | CaseCountOutputTypeCountAssignmentsArgs;
    history?: boolean | CaseCountOutputTypeCountHistoryArgs;
    notifications?: boolean | CaseCountOutputTypeCountNotificationsArgs;
    attachments?: boolean | CaseCountOutputTypeCountAttachmentsArgs;
    auditLogs?: boolean | CaseCountOutputTypeCountAuditLogsArgs;
};
export type CaseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseCountOutputTypeSelect<ExtArgs> | null;
};
export type CaseCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
};
export type CaseCountOutputTypeCountHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseHistoryWhereInput;
};
export type CaseCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type CaseCountOutputTypeCountAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
};
export type CaseCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type CaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseNumber?: boolean;
    citizenId?: boolean;
    assignedOfficerId?: boolean;
    category?: boolean;
    description?: boolean;
    district?: boolean;
    priority?: boolean;
    currentStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    closedAt?: boolean;
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedOfficer?: boolean | Prisma.Case$assignedOfficerArgs<ExtArgs>;
    assignments?: boolean | Prisma.Case$assignmentsArgs<ExtArgs>;
    history?: boolean | Prisma.Case$historyArgs<ExtArgs>;
    notifications?: boolean | Prisma.Case$notificationsArgs<ExtArgs>;
    attachments?: boolean | Prisma.Case$attachmentsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Case$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.CaseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["case"]>;
export type CaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseNumber?: boolean;
    citizenId?: boolean;
    assignedOfficerId?: boolean;
    category?: boolean;
    description?: boolean;
    district?: boolean;
    priority?: boolean;
    currentStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    closedAt?: boolean;
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedOfficer?: boolean | Prisma.Case$assignedOfficerArgs<ExtArgs>;
}, ExtArgs["result"]["case"]>;
export type CaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseNumber?: boolean;
    citizenId?: boolean;
    assignedOfficerId?: boolean;
    category?: boolean;
    description?: boolean;
    district?: boolean;
    priority?: boolean;
    currentStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    closedAt?: boolean;
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedOfficer?: boolean | Prisma.Case$assignedOfficerArgs<ExtArgs>;
}, ExtArgs["result"]["case"]>;
export type CaseSelectScalar = {
    id?: boolean;
    caseNumber?: boolean;
    citizenId?: boolean;
    assignedOfficerId?: boolean;
    category?: boolean;
    description?: boolean;
    district?: boolean;
    priority?: boolean;
    currentStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    closedAt?: boolean;
};
export type CaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "caseNumber" | "citizenId" | "assignedOfficerId" | "category" | "description" | "district" | "priority" | "currentStatus" | "createdAt" | "updatedAt" | "closedAt", ExtArgs["result"]["case"]>;
export type CaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedOfficer?: boolean | Prisma.Case$assignedOfficerArgs<ExtArgs>;
    assignments?: boolean | Prisma.Case$assignmentsArgs<ExtArgs>;
    history?: boolean | Prisma.Case$historyArgs<ExtArgs>;
    notifications?: boolean | Prisma.Case$notificationsArgs<ExtArgs>;
    attachments?: boolean | Prisma.Case$attachmentsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Case$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.CaseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedOfficer?: boolean | Prisma.Case$assignedOfficerArgs<ExtArgs>;
};
export type CaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citizen?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedOfficer?: boolean | Prisma.Case$assignedOfficerArgs<ExtArgs>;
};
export type $CasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Case";
    objects: {
        citizen: Prisma.$UserPayload<ExtArgs>;
        assignedOfficer: Prisma.$UserPayload<ExtArgs> | null;
        assignments: Prisma.$AssignmentPayload<ExtArgs>[];
        history: Prisma.$CaseHistoryPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        attachments: Prisma.$AttachmentPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        caseNumber: string;
        citizenId: string;
        assignedOfficerId: string | null;
        category: string;
        description: string;
        district: string | null;
        priority: $Enums.CasePriority;
        currentStatus: $Enums.CaseStatus;
        createdAt: Date;
        updatedAt: Date;
        closedAt: Date | null;
    }, ExtArgs["result"]["case"]>;
    composites: {};
};
export type CaseGetPayload<S extends boolean | null | undefined | CaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CasePayload, S>;
export type CaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CaseCountAggregateInputType | true;
};
export interface CaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Case'];
        meta: {
            name: 'Case';
        };
    };
    findUnique<T extends CaseFindUniqueArgs>(args: Prisma.SelectSubset<T, CaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CaseFindFirstArgs>(args?: Prisma.SelectSubset<T, CaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CaseFindManyArgs>(args?: Prisma.SelectSubset<T, CaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CaseCreateArgs>(args: Prisma.SelectSubset<T, CaseCreateArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CaseCreateManyArgs>(args?: Prisma.SelectSubset<T, CaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CaseDeleteArgs>(args: Prisma.SelectSubset<T, CaseDeleteArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CaseUpdateArgs>(args: Prisma.SelectSubset<T, CaseUpdateArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, CaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CaseUpdateManyArgs>(args: Prisma.SelectSubset<T, CaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CaseUpsertArgs>(args: Prisma.SelectSubset<T, CaseUpsertArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CaseCountArgs>(args?: Prisma.Subset<T, CaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CaseCountAggregateOutputType> : number>;
    aggregate<T extends CaseAggregateArgs>(args: Prisma.Subset<T, CaseAggregateArgs>): Prisma.PrismaPromise<GetCaseAggregateType<T>>;
    groupBy<T extends CaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CaseGroupByArgs['orderBy'];
    } : {
        orderBy?: CaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CaseFieldRefs;
}
export interface Prisma__CaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citizen<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignedOfficer<T extends Prisma.Case$assignedOfficerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Case$assignedOfficerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    assignments<T extends Prisma.Case$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Case$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    history<T extends Prisma.Case$historyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Case$historyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.Case$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Case$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attachments<T extends Prisma.Case$attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Case$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.Case$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Case$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CaseFieldRefs {
    readonly id: Prisma.FieldRef<"Case", 'String'>;
    readonly caseNumber: Prisma.FieldRef<"Case", 'String'>;
    readonly citizenId: Prisma.FieldRef<"Case", 'String'>;
    readonly assignedOfficerId: Prisma.FieldRef<"Case", 'String'>;
    readonly category: Prisma.FieldRef<"Case", 'String'>;
    readonly description: Prisma.FieldRef<"Case", 'String'>;
    readonly district: Prisma.FieldRef<"Case", 'String'>;
    readonly priority: Prisma.FieldRef<"Case", 'CasePriority'>;
    readonly currentStatus: Prisma.FieldRef<"Case", 'CaseStatus'>;
    readonly createdAt: Prisma.FieldRef<"Case", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Case", 'DateTime'>;
    readonly closedAt: Prisma.FieldRef<"Case", 'DateTime'>;
}
export type CaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    where: Prisma.CaseWhereUniqueInput;
};
export type CaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    where: Prisma.CaseWhereUniqueInput;
};
export type CaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    where?: Prisma.CaseWhereInput;
    orderBy?: Prisma.CaseOrderByWithRelationInput | Prisma.CaseOrderByWithRelationInput[];
    cursor?: Prisma.CaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaseScalarFieldEnum | Prisma.CaseScalarFieldEnum[];
};
export type CaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    where?: Prisma.CaseWhereInput;
    orderBy?: Prisma.CaseOrderByWithRelationInput | Prisma.CaseOrderByWithRelationInput[];
    cursor?: Prisma.CaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaseScalarFieldEnum | Prisma.CaseScalarFieldEnum[];
};
export type CaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    where?: Prisma.CaseWhereInput;
    orderBy?: Prisma.CaseOrderByWithRelationInput | Prisma.CaseOrderByWithRelationInput[];
    cursor?: Prisma.CaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CaseScalarFieldEnum | Prisma.CaseScalarFieldEnum[];
};
export type CaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaseCreateInput, Prisma.CaseUncheckedCreateInput>;
};
export type CaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CaseCreateManyInput | Prisma.CaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    data: Prisma.CaseCreateManyInput | Prisma.CaseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CaseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaseUpdateInput, Prisma.CaseUncheckedUpdateInput>;
    where: Prisma.CaseWhereUniqueInput;
};
export type CaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CaseUpdateManyMutationInput, Prisma.CaseUncheckedUpdateManyInput>;
    where?: Prisma.CaseWhereInput;
    limit?: number;
};
export type CaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CaseUpdateManyMutationInput, Prisma.CaseUncheckedUpdateManyInput>;
    where?: Prisma.CaseWhereInput;
    limit?: number;
    include?: Prisma.CaseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    where: Prisma.CaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CaseCreateInput, Prisma.CaseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CaseUpdateInput, Prisma.CaseUncheckedUpdateInput>;
};
export type CaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
    where: Prisma.CaseWhereUniqueInput;
};
export type CaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseWhereInput;
    limit?: number;
};
export type Case$assignedOfficerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Case$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Case$historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Case$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type Case$attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
export type Case$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type CaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CaseSelect<ExtArgs> | null;
    omit?: Prisma.CaseOmit<ExtArgs> | null;
    include?: Prisma.CaseInclude<ExtArgs> | null;
};
