import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    passwordHash: number;
    role: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    passwordHash?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    citizenCases?: Prisma.CaseListRelationFilter;
    officerProfile?: Prisma.XOR<Prisma.OfficerNullableScalarRelationFilter, Prisma.OfficerWhereInput> | null;
    assignedCases?: Prisma.CaseListRelationFilter;
    assignments?: Prisma.AssignmentListRelationFilter;
    assignedAssignments?: Prisma.AssignmentListRelationFilter;
    caseHistoryChanges?: Prisma.CaseHistoryListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    uuploadedAttachments?: Prisma.AttachmentListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    citizenCases?: Prisma.CaseOrderByRelationAggregateInput;
    officerProfile?: Prisma.OfficerOrderByWithRelationInput;
    assignedCases?: Prisma.CaseOrderByRelationAggregateInput;
    assignments?: Prisma.AssignmentOrderByRelationAggregateInput;
    assignedAssignments?: Prisma.AssignmentOrderByRelationAggregateInput;
    caseHistoryChanges?: Prisma.CaseHistoryOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    uuploadedAttachments?: Prisma.AttachmentOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    citizenCases?: Prisma.CaseListRelationFilter;
    officerProfile?: Prisma.XOR<Prisma.OfficerNullableScalarRelationFilter, Prisma.OfficerWhereInput> | null;
    assignedCases?: Prisma.CaseListRelationFilter;
    assignments?: Prisma.AssignmentListRelationFilter;
    assignedAssignments?: Prisma.AssignmentListRelationFilter;
    caseHistoryChanges?: Prisma.CaseHistoryListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    uuploadedAttachments?: Prisma.AttachmentListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutOfficerProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOfficerProfileInput, Prisma.UserUncheckedCreateWithoutOfficerProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOfficerProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOfficerProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOfficerProfileInput, Prisma.UserUncheckedCreateWithoutOfficerProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOfficerProfileInput;
    upsert?: Prisma.UserUpsertWithoutOfficerProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOfficerProfileInput, Prisma.UserUpdateWithoutOfficerProfileInput>, Prisma.UserUncheckedUpdateWithoutOfficerProfileInput>;
};
export type UserCreateNestedOneWithoutCitizenCasesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCitizenCasesInput, Prisma.UserUncheckedCreateWithoutCitizenCasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCitizenCasesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutAssignedCasesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedCasesInput, Prisma.UserUncheckedCreateWithoutAssignedCasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedCasesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCitizenCasesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCitizenCasesInput, Prisma.UserUncheckedCreateWithoutCitizenCasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCitizenCasesInput;
    upsert?: Prisma.UserUpsertWithoutCitizenCasesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCitizenCasesInput, Prisma.UserUpdateWithoutCitizenCasesInput>, Prisma.UserUncheckedUpdateWithoutCitizenCasesInput>;
};
export type UserUpdateOneWithoutAssignedCasesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedCasesInput, Prisma.UserUncheckedCreateWithoutAssignedCasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedCasesInput;
    upsert?: Prisma.UserUpsertWithoutAssignedCasesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAssignedCasesInput, Prisma.UserUpdateWithoutAssignedCasesInput>, Prisma.UserUncheckedUpdateWithoutAssignedCasesInput>;
};
export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutAssignedAssignmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignedAssignmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedAssignmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.UserUpsertWithoutAssignmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.UserUpdateWithoutAssignmentsInput>, Prisma.UserUncheckedUpdateWithoutAssignmentsInput>;
};
export type UserUpdateOneRequiredWithoutAssignedAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignedAssignmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedAssignmentsInput;
    upsert?: Prisma.UserUpsertWithoutAssignedAssignmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAssignedAssignmentsInput, Prisma.UserUpdateWithoutAssignedAssignmentsInput>, Prisma.UserUncheckedUpdateWithoutAssignedAssignmentsInput>;
};
export type UserCreateNestedOneWithoutCaseHistoryChangesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCaseHistoryChangesInput, Prisma.UserUncheckedCreateWithoutCaseHistoryChangesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCaseHistoryChangesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCaseHistoryChangesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCaseHistoryChangesInput, Prisma.UserUncheckedCreateWithoutCaseHistoryChangesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCaseHistoryChangesInput;
    upsert?: Prisma.UserUpsertWithoutCaseHistoryChangesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCaseHistoryChangesInput, Prisma.UserUpdateWithoutCaseHistoryChangesInput>, Prisma.UserUncheckedUpdateWithoutCaseHistoryChangesInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutUuploadedAttachmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUuploadedAttachmentsInput, Prisma.UserUncheckedCreateWithoutUuploadedAttachmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUuploadedAttachmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUuploadedAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUuploadedAttachmentsInput, Prisma.UserUncheckedCreateWithoutUuploadedAttachmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUuploadedAttachmentsInput;
    upsert?: Prisma.UserUpsertWithoutUuploadedAttachmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUuploadedAttachmentsInput, Prisma.UserUpdateWithoutUuploadedAttachmentsInput>, Prisma.UserUncheckedUpdateWithoutUuploadedAttachmentsInput>;
};
export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.UserUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UserUpdateWithoutAuditLogsInput>, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserCreateWithoutOfficerProfileInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOfficerProfileInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOfficerProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOfficerProfileInput, Prisma.UserUncheckedCreateWithoutOfficerProfileInput>;
};
export type UserUpsertWithoutOfficerProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOfficerProfileInput, Prisma.UserUncheckedUpdateWithoutOfficerProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOfficerProfileInput, Prisma.UserUncheckedCreateWithoutOfficerProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOfficerProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOfficerProfileInput, Prisma.UserUncheckedUpdateWithoutOfficerProfileInput>;
};
export type UserUpdateWithoutOfficerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOfficerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCitizenCasesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCitizenCasesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCitizenCasesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCitizenCasesInput, Prisma.UserUncheckedCreateWithoutCitizenCasesInput>;
};
export type UserCreateWithoutAssignedCasesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAssignedCasesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAssignedCasesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedCasesInput, Prisma.UserUncheckedCreateWithoutAssignedCasesInput>;
};
export type UserUpsertWithoutCitizenCasesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCitizenCasesInput, Prisma.UserUncheckedUpdateWithoutCitizenCasesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCitizenCasesInput, Prisma.UserUncheckedCreateWithoutCitizenCasesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCitizenCasesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCitizenCasesInput, Prisma.UserUncheckedUpdateWithoutCitizenCasesInput>;
};
export type UserUpdateWithoutCitizenCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCitizenCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutAssignedCasesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAssignedCasesInput, Prisma.UserUncheckedUpdateWithoutAssignedCasesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedCasesInput, Prisma.UserUncheckedCreateWithoutAssignedCasesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAssignedCasesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAssignedCasesInput, Prisma.UserUncheckedUpdateWithoutAssignedCasesInput>;
};
export type UserUpdateWithoutAssignedCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAssignedCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAssignmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignmentsInput>;
};
export type UserCreateWithoutAssignedAssignmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAssignedAssignmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAssignedAssignmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignedAssignmentsInput>;
};
export type UserUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAssignmentsInput, Prisma.UserUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAssignmentsInput, Prisma.UserUncheckedUpdateWithoutAssignmentsInput>;
};
export type UserUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutAssignedAssignmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAssignedAssignmentsInput, Prisma.UserUncheckedUpdateWithoutAssignedAssignmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignedAssignmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAssignedAssignmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAssignedAssignmentsInput, Prisma.UserUncheckedUpdateWithoutAssignedAssignmentsInput>;
};
export type UserUpdateWithoutAssignedAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAssignedAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCaseHistoryChangesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCaseHistoryChangesInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCaseHistoryChangesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCaseHistoryChangesInput, Prisma.UserUncheckedCreateWithoutCaseHistoryChangesInput>;
};
export type UserUpsertWithoutCaseHistoryChangesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCaseHistoryChangesInput, Prisma.UserUncheckedUpdateWithoutCaseHistoryChangesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCaseHistoryChangesInput, Prisma.UserUncheckedCreateWithoutCaseHistoryChangesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCaseHistoryChangesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCaseHistoryChangesInput, Prisma.UserUncheckedUpdateWithoutCaseHistoryChangesInput>;
};
export type UserUpdateWithoutCaseHistoryChangesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCaseHistoryChangesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutUuploadedAttachmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutUuploadedAttachmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutUuploadedAttachmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUuploadedAttachmentsInput, Prisma.UserUncheckedCreateWithoutUuploadedAttachmentsInput>;
};
export type UserUpsertWithoutUuploadedAttachmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUuploadedAttachmentsInput, Prisma.UserUncheckedUpdateWithoutUuploadedAttachmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUuploadedAttachmentsInput, Prisma.UserUncheckedCreateWithoutUuploadedAttachmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUuploadedAttachmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUuploadedAttachmentsInput, Prisma.UserUncheckedUpdateWithoutUuploadedAttachmentsInput>;
};
export type UserUpdateWithoutUuploadedAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutUuploadedAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentCreateNestedManyWithoutUploadedByInput;
};
export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    passwordHash: string;
    role: $Enums.Role;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    citizenCases?: Prisma.CaseUncheckedCreateNestedManyWithoutCitizenInput;
    officerProfile?: Prisma.OfficerUncheckedCreateNestedOneWithoutUserInput;
    assignedCases?: Prisma.CaseUncheckedCreateNestedManyWithoutAssignedOfficerInput;
    assignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutOfficerInput;
    assignedAssignments?: Prisma.AssignmentUncheckedCreateNestedManyWithoutAssignedByInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedCreateNestedManyWithoutChangedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutUploadedByInput;
};
export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
};
export type UserUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUpdateManyWithoutUploadedByNestedInput;
};
export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citizenCases?: Prisma.CaseUncheckedUpdateManyWithoutCitizenNestedInput;
    officerProfile?: Prisma.OfficerUncheckedUpdateOneWithoutUserNestedInput;
    assignedCases?: Prisma.CaseUncheckedUpdateManyWithoutAssignedOfficerNestedInput;
    assignments?: Prisma.AssignmentUncheckedUpdateManyWithoutOfficerNestedInput;
    assignedAssignments?: Prisma.AssignmentUncheckedUpdateManyWithoutAssignedByNestedInput;
    caseHistoryChanges?: Prisma.CaseHistoryUncheckedUpdateManyWithoutChangedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    uuploadedAttachments?: Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput;
};
export type UserCountOutputType = {
    citizenCases: number;
    assignedCases: number;
    assignments: number;
    assignedAssignments: number;
    caseHistoryChanges: number;
    notifications: number;
    uuploadedAttachments: number;
    auditLogs: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citizenCases?: boolean | UserCountOutputTypeCountCitizenCasesArgs;
    assignedCases?: boolean | UserCountOutputTypeCountAssignedCasesArgs;
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs;
    assignedAssignments?: boolean | UserCountOutputTypeCountAssignedAssignmentsArgs;
    caseHistoryChanges?: boolean | UserCountOutputTypeCountCaseHistoryChangesArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    uuploadedAttachments?: boolean | UserCountOutputTypeCountUuploadedAttachmentsArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountCitizenCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseWhereInput;
};
export type UserCountOutputTypeCountAssignedCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseWhereInput;
};
export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
};
export type UserCountOutputTypeCountAssignedAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssignmentWhereInput;
};
export type UserCountOutputTypeCountCaseHistoryChangesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CaseHistoryWhereInput;
};
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserCountOutputTypeCountUuploadedAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
};
export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    citizenCases?: boolean | Prisma.User$citizenCasesArgs<ExtArgs>;
    officerProfile?: boolean | Prisma.User$officerProfileArgs<ExtArgs>;
    assignedCases?: boolean | Prisma.User$assignedCasesArgs<ExtArgs>;
    assignments?: boolean | Prisma.User$assignmentsArgs<ExtArgs>;
    assignedAssignments?: boolean | Prisma.User$assignedAssignmentsArgs<ExtArgs>;
    caseHistoryChanges?: boolean | Prisma.User$caseHistoryChangesArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    uuploadedAttachments?: boolean | Prisma.User$uuploadedAttachmentsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citizenCases?: boolean | Prisma.User$citizenCasesArgs<ExtArgs>;
    officerProfile?: boolean | Prisma.User$officerProfileArgs<ExtArgs>;
    assignedCases?: boolean | Prisma.User$assignedCasesArgs<ExtArgs>;
    assignments?: boolean | Prisma.User$assignmentsArgs<ExtArgs>;
    assignedAssignments?: boolean | Prisma.User$assignedAssignmentsArgs<ExtArgs>;
    caseHistoryChanges?: boolean | Prisma.User$caseHistoryChangesArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    uuploadedAttachments?: boolean | Prisma.User$uuploadedAttachmentsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        citizenCases: Prisma.$CasePayload<ExtArgs>[];
        officerProfile: Prisma.$OfficerPayload<ExtArgs> | null;
        assignedCases: Prisma.$CasePayload<ExtArgs>[];
        assignments: Prisma.$AssignmentPayload<ExtArgs>[];
        assignedAssignments: Prisma.$AssignmentPayload<ExtArgs>[];
        caseHistoryChanges: Prisma.$CaseHistoryPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        uuploadedAttachments: Prisma.$AttachmentPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: $Enums.Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citizenCases<T extends Prisma.User$citizenCasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$citizenCasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    officerProfile<T extends Prisma.User$officerProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$officerProfileArgs<ExtArgs>>): Prisma.Prisma__OfficerClient<runtime.Types.Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    assignedCases<T extends Prisma.User$assignedCasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$assignedCasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignments<T extends Prisma.User$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignedAssignments<T extends Prisma.User$assignedAssignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$assignedAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    caseHistoryChanges<T extends Prisma.User$caseHistoryChangesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$caseHistoryChangesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CaseHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    uuploadedAttachments<T extends Prisma.User$uuploadedAttachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$uuploadedAttachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.User$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$citizenCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$officerProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfficerSelect<ExtArgs> | null;
    omit?: Prisma.OfficerOmit<ExtArgs> | null;
    include?: Prisma.OfficerInclude<ExtArgs> | null;
    where?: Prisma.OfficerWhereInput;
};
export type User$assignedCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$assignedAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$caseHistoryChangesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$uuploadedAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
