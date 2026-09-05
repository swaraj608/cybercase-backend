import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AttachmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AttachmentPayload>;
export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null;
    _avg: AttachmentAvgAggregateOutputType | null;
    _sum: AttachmentSumAggregateOutputType | null;
    _min: AttachmentMinAggregateOutputType | null;
    _max: AttachmentMaxAggregateOutputType | null;
};
export type AttachmentAvgAggregateOutputType = {
    fileSize: number | null;
};
export type AttachmentSumAggregateOutputType = {
    fileSize: number | null;
};
export type AttachmentMinAggregateOutputType = {
    id: string | null;
    caseId: string | null;
    uploadedById: string | null;
    fileName: string | null;
    objectKey: string | null;
    contentType: string | null;
    fileSize: number | null;
    createdAt: Date | null;
};
export type AttachmentMaxAggregateOutputType = {
    id: string | null;
    caseId: string | null;
    uploadedById: string | null;
    fileName: string | null;
    objectKey: string | null;
    contentType: string | null;
    fileSize: number | null;
    createdAt: Date | null;
};
export type AttachmentCountAggregateOutputType = {
    id: number;
    caseId: number;
    uploadedById: number;
    fileName: number;
    objectKey: number;
    contentType: number;
    fileSize: number;
    createdAt: number;
    _all: number;
};
export type AttachmentAvgAggregateInputType = {
    fileSize?: true;
};
export type AttachmentSumAggregateInputType = {
    fileSize?: true;
};
export type AttachmentMinAggregateInputType = {
    id?: true;
    caseId?: true;
    uploadedById?: true;
    fileName?: true;
    objectKey?: true;
    contentType?: true;
    fileSize?: true;
    createdAt?: true;
};
export type AttachmentMaxAggregateInputType = {
    id?: true;
    caseId?: true;
    uploadedById?: true;
    fileName?: true;
    objectKey?: true;
    contentType?: true;
    fileSize?: true;
    createdAt?: true;
};
export type AttachmentCountAggregateInputType = {
    id?: true;
    caseId?: true;
    uploadedById?: true;
    fileName?: true;
    objectKey?: true;
    contentType?: true;
    fileSize?: true;
    createdAt?: true;
    _all?: true;
};
export type AttachmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttachmentCountAggregateInputType;
    _avg?: AttachmentAvgAggregateInputType;
    _sum?: AttachmentSumAggregateInputType;
    _min?: AttachmentMinAggregateInputType;
    _max?: AttachmentMaxAggregateInputType;
};
export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttachment[P]> : Prisma.GetScalarType<T[P], AggregateAttachment[P]>;
};
export type AttachmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithAggregationInput | Prisma.AttachmentOrderByWithAggregationInput[];
    by: Prisma.AttachmentScalarFieldEnum[] | Prisma.AttachmentScalarFieldEnum;
    having?: Prisma.AttachmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttachmentCountAggregateInputType | true;
    _avg?: AttachmentAvgAggregateInputType;
    _sum?: AttachmentSumAggregateInputType;
    _min?: AttachmentMinAggregateInputType;
    _max?: AttachmentMaxAggregateInputType;
};
export type AttachmentGroupByOutputType = {
    id: string;
    caseId: string;
    uploadedById: string;
    fileName: string;
    objectKey: string;
    contentType: string | null;
    fileSize: number | null;
    createdAt: Date;
    _count: AttachmentCountAggregateOutputType | null;
    _avg: AttachmentAvgAggregateOutputType | null;
    _sum: AttachmentSumAggregateOutputType | null;
    _min: AttachmentMinAggregateOutputType | null;
    _max: AttachmentMaxAggregateOutputType | null;
};
export type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttachmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttachmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttachmentGroupByOutputType[P]>;
}>>;
export type AttachmentWhereInput = {
    AND?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    OR?: Prisma.AttachmentWhereInput[];
    NOT?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    id?: Prisma.StringFilter<"Attachment"> | string;
    caseId?: Prisma.StringFilter<"Attachment"> | string;
    uploadedById?: Prisma.StringFilter<"Attachment"> | string;
    fileName?: Prisma.StringFilter<"Attachment"> | string;
    objectKey?: Prisma.StringFilter<"Attachment"> | string;
    contentType?: Prisma.StringNullableFilter<"Attachment"> | string | null;
    fileSize?: Prisma.IntNullableFilter<"Attachment"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
    case?: Prisma.XOR<Prisma.CaseScalarRelationFilter, Prisma.CaseWhereInput>;
    uploadedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AttachmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    case?: Prisma.CaseOrderByWithRelationInput;
    uploadedBy?: Prisma.UserOrderByWithRelationInput;
};
export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    OR?: Prisma.AttachmentWhereInput[];
    NOT?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    caseId?: Prisma.StringFilter<"Attachment"> | string;
    uploadedById?: Prisma.StringFilter<"Attachment"> | string;
    fileName?: Prisma.StringFilter<"Attachment"> | string;
    objectKey?: Prisma.StringFilter<"Attachment"> | string;
    contentType?: Prisma.StringNullableFilter<"Attachment"> | string | null;
    fileSize?: Prisma.IntNullableFilter<"Attachment"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
    case?: Prisma.XOR<Prisma.CaseScalarRelationFilter, Prisma.CaseWhereInput>;
    uploadedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AttachmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AttachmentCountOrderByAggregateInput;
    _avg?: Prisma.AttachmentAvgOrderByAggregateInput;
    _max?: Prisma.AttachmentMaxOrderByAggregateInput;
    _min?: Prisma.AttachmentMinOrderByAggregateInput;
    _sum?: Prisma.AttachmentSumOrderByAggregateInput;
};
export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttachmentScalarWhereWithAggregatesInput | Prisma.AttachmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttachmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttachmentScalarWhereWithAggregatesInput | Prisma.AttachmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    caseId?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    uploadedById?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    objectKey?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    contentType?: Prisma.StringNullableWithAggregatesFilter<"Attachment"> | string | null;
    fileSize?: Prisma.IntNullableWithAggregatesFilter<"Attachment"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Attachment"> | Date | string;
};
export type AttachmentCreateInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
    case: Prisma.CaseCreateNestedOneWithoutAttachmentsInput;
    uploadedBy: Prisma.UserCreateNestedOneWithoutUuploadedAttachmentsInput;
};
export type AttachmentUncheckedCreateInput = {
    id?: string;
    caseId: string;
    uploadedById: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
};
export type AttachmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    case?: Prisma.CaseUpdateOneRequiredWithoutAttachmentsNestedInput;
    uploadedBy?: Prisma.UserUpdateOneRequiredWithoutUuploadedAttachmentsNestedInput;
};
export type AttachmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentCreateManyInput = {
    id?: string;
    caseId: string;
    uploadedById: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
};
export type AttachmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentListRelationFilter = {
    every?: Prisma.AttachmentWhereInput;
    some?: Prisma.AttachmentWhereInput;
    none?: Prisma.AttachmentWhereInput;
};
export type AttachmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttachmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttachmentAvgOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type AttachmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttachmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    caseId?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AttachmentSumOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type AttachmentCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadedByInput, Prisma.AttachmentUncheckedCreateWithoutUploadedByInput> | Prisma.AttachmentCreateWithoutUploadedByInput[] | Prisma.AttachmentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutUploadedByInput | Prisma.AttachmentCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.AttachmentCreateManyUploadedByInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadedByInput, Prisma.AttachmentUncheckedCreateWithoutUploadedByInput> | Prisma.AttachmentCreateWithoutUploadedByInput[] | Prisma.AttachmentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutUploadedByInput | Prisma.AttachmentCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.AttachmentCreateManyUploadedByInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadedByInput, Prisma.AttachmentUncheckedCreateWithoutUploadedByInput> | Prisma.AttachmentCreateWithoutUploadedByInput[] | Prisma.AttachmentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutUploadedByInput | Prisma.AttachmentCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.AttachmentCreateManyUploadedByInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutUploadedByInput | Prisma.AttachmentUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadedByInput, Prisma.AttachmentUncheckedCreateWithoutUploadedByInput> | Prisma.AttachmentCreateWithoutUploadedByInput[] | Prisma.AttachmentUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutUploadedByInput | Prisma.AttachmentCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.AttachmentCreateManyUploadedByInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutUploadedByInput | Prisma.AttachmentUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentCreateNestedManyWithoutCaseInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutCaseInput, Prisma.AttachmentUncheckedCreateWithoutCaseInput> | Prisma.AttachmentCreateWithoutCaseInput[] | Prisma.AttachmentUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutCaseInput | Prisma.AttachmentCreateOrConnectWithoutCaseInput[];
    createMany?: Prisma.AttachmentCreateManyCaseInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUncheckedCreateNestedManyWithoutCaseInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutCaseInput, Prisma.AttachmentUncheckedCreateWithoutCaseInput> | Prisma.AttachmentCreateWithoutCaseInput[] | Prisma.AttachmentUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutCaseInput | Prisma.AttachmentCreateOrConnectWithoutCaseInput[];
    createMany?: Prisma.AttachmentCreateManyCaseInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUpdateManyWithoutCaseNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutCaseInput, Prisma.AttachmentUncheckedCreateWithoutCaseInput> | Prisma.AttachmentCreateWithoutCaseInput[] | Prisma.AttachmentUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutCaseInput | Prisma.AttachmentCreateOrConnectWithoutCaseInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutCaseInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutCaseInput[];
    createMany?: Prisma.AttachmentCreateManyCaseInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutCaseInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutCaseInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutCaseInput | Prisma.AttachmentUpdateManyWithWhereWithoutCaseInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutCaseInput, Prisma.AttachmentUncheckedCreateWithoutCaseInput> | Prisma.AttachmentCreateWithoutCaseInput[] | Prisma.AttachmentUncheckedCreateWithoutCaseInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutCaseInput | Prisma.AttachmentCreateOrConnectWithoutCaseInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutCaseInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutCaseInput[];
    createMany?: Prisma.AttachmentCreateManyCaseInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutCaseInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutCaseInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutCaseInput | Prisma.AttachmentUpdateManyWithWhereWithoutCaseInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AttachmentCreateWithoutUploadedByInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
    case: Prisma.CaseCreateNestedOneWithoutAttachmentsInput;
};
export type AttachmentUncheckedCreateWithoutUploadedByInput = {
    id?: string;
    caseId: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
};
export type AttachmentCreateOrConnectWithoutUploadedByInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadedByInput, Prisma.AttachmentUncheckedCreateWithoutUploadedByInput>;
};
export type AttachmentCreateManyUploadedByInputEnvelope = {
    data: Prisma.AttachmentCreateManyUploadedByInput | Prisma.AttachmentCreateManyUploadedByInput[];
    skipDuplicates?: boolean;
};
export type AttachmentUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttachmentUpdateWithoutUploadedByInput, Prisma.AttachmentUncheckedUpdateWithoutUploadedByInput>;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutUploadedByInput, Prisma.AttachmentUncheckedCreateWithoutUploadedByInput>;
};
export type AttachmentUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateWithoutUploadedByInput, Prisma.AttachmentUncheckedUpdateWithoutUploadedByInput>;
};
export type AttachmentUpdateManyWithWhereWithoutUploadedByInput = {
    where: Prisma.AttachmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyWithoutUploadedByInput>;
};
export type AttachmentScalarWhereInput = {
    AND?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
    OR?: Prisma.AttachmentScalarWhereInput[];
    NOT?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Attachment"> | string;
    caseId?: Prisma.StringFilter<"Attachment"> | string;
    uploadedById?: Prisma.StringFilter<"Attachment"> | string;
    fileName?: Prisma.StringFilter<"Attachment"> | string;
    objectKey?: Prisma.StringFilter<"Attachment"> | string;
    contentType?: Prisma.StringNullableFilter<"Attachment"> | string | null;
    fileSize?: Prisma.IntNullableFilter<"Attachment"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Attachment"> | Date | string;
};
export type AttachmentCreateWithoutCaseInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
    uploadedBy: Prisma.UserCreateNestedOneWithoutUuploadedAttachmentsInput;
};
export type AttachmentUncheckedCreateWithoutCaseInput = {
    id?: string;
    uploadedById: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
};
export type AttachmentCreateOrConnectWithoutCaseInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutCaseInput, Prisma.AttachmentUncheckedCreateWithoutCaseInput>;
};
export type AttachmentCreateManyCaseInputEnvelope = {
    data: Prisma.AttachmentCreateManyCaseInput | Prisma.AttachmentCreateManyCaseInput[];
    skipDuplicates?: boolean;
};
export type AttachmentUpsertWithWhereUniqueWithoutCaseInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttachmentUpdateWithoutCaseInput, Prisma.AttachmentUncheckedUpdateWithoutCaseInput>;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutCaseInput, Prisma.AttachmentUncheckedCreateWithoutCaseInput>;
};
export type AttachmentUpdateWithWhereUniqueWithoutCaseInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateWithoutCaseInput, Prisma.AttachmentUncheckedUpdateWithoutCaseInput>;
};
export type AttachmentUpdateManyWithWhereWithoutCaseInput = {
    where: Prisma.AttachmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyWithoutCaseInput>;
};
export type AttachmentCreateManyUploadedByInput = {
    id?: string;
    caseId: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
};
export type AttachmentUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    case?: Prisma.CaseUpdateOneRequiredWithoutAttachmentsNestedInput;
};
export type AttachmentUncheckedUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateManyWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    caseId?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentCreateManyCaseInput = {
    id?: string;
    uploadedById: string;
    fileName: string;
    objectKey: string;
    contentType?: string | null;
    fileSize?: number | null;
    createdAt?: Date | string;
};
export type AttachmentUpdateWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    uploadedBy?: Prisma.UserUpdateOneRequiredWithoutUuploadedAttachmentsNestedInput;
};
export type AttachmentUncheckedUpdateWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentUncheckedUpdateManyWithoutCaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttachmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    uploadedById?: boolean;
    fileName?: boolean;
    objectKey?: boolean;
    contentType?: boolean;
    fileSize?: boolean;
    createdAt?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attachment"]>;
export type AttachmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    uploadedById?: boolean;
    fileName?: boolean;
    objectKey?: boolean;
    contentType?: boolean;
    fileSize?: boolean;
    createdAt?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attachment"]>;
export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    caseId?: boolean;
    uploadedById?: boolean;
    fileName?: boolean;
    objectKey?: boolean;
    contentType?: boolean;
    fileSize?: boolean;
    createdAt?: boolean;
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attachment"]>;
export type AttachmentSelectScalar = {
    id?: boolean;
    caseId?: boolean;
    uploadedById?: boolean;
    fileName?: boolean;
    objectKey?: boolean;
    contentType?: boolean;
    fileSize?: boolean;
    createdAt?: boolean;
};
export type AttachmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "caseId" | "uploadedById" | "fileName" | "objectKey" | "contentType" | "fileSize" | "createdAt", ExtArgs["result"]["attachment"]>;
export type AttachmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    case?: boolean | Prisma.CaseDefaultArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AttachmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Attachment";
    objects: {
        case: Prisma.$CasePayload<ExtArgs>;
        uploadedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        caseId: string;
        uploadedById: string;
        fileName: string;
        objectKey: string;
        contentType: string | null;
        fileSize: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["attachment"]>;
    composites: {};
};
export type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttachmentPayload, S>;
export type AttachmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttachmentCountAggregateInputType | true;
};
export interface AttachmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Attachment'];
        meta: {
            name: 'Attachment';
        };
    };
    findUnique<T extends AttachmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttachmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttachmentFindManyArgs>(args?: Prisma.SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttachmentCreateArgs>(args: Prisma.SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttachmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttachmentDeleteArgs>(args: Prisma.SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttachmentUpdateArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttachmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttachmentUpsertArgs>(args: Prisma.SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttachmentCountArgs>(args?: Prisma.Subset<T, AttachmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttachmentCountAggregateOutputType> : number>;
    aggregate<T extends AttachmentAggregateArgs>(args: Prisma.Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>;
    groupBy<T extends AttachmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttachmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AttachmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttachmentFieldRefs;
}
export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    case<T extends Prisma.CaseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CaseDefaultArgs<ExtArgs>>): Prisma.Prisma__CaseClient<runtime.Types.Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    uploadedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttachmentFieldRefs {
    readonly id: Prisma.FieldRef<"Attachment", 'String'>;
    readonly caseId: Prisma.FieldRef<"Attachment", 'String'>;
    readonly uploadedById: Prisma.FieldRef<"Attachment", 'String'>;
    readonly fileName: Prisma.FieldRef<"Attachment", 'String'>;
    readonly objectKey: Prisma.FieldRef<"Attachment", 'String'>;
    readonly contentType: Prisma.FieldRef<"Attachment", 'String'>;
    readonly fileSize: Prisma.FieldRef<"Attachment", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Attachment", 'DateTime'>;
}
export type AttachmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttachmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttachmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttachmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttachmentCreateInput, Prisma.AttachmentUncheckedCreateInput>;
};
export type AttachmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttachmentCreateManyInput | Prisma.AttachmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttachmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    data: Prisma.AttachmentCreateManyInput | Prisma.AttachmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttachmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttachmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttachmentUpdateInput, Prisma.AttachmentUncheckedUpdateInput>;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyInput>;
    where?: Prisma.AttachmentWhereInput;
    limit?: number;
};
export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyInput>;
    where?: Prisma.AttachmentWhereInput;
    limit?: number;
    include?: Prisma.AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttachmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateInput, Prisma.AttachmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttachmentUpdateInput, Prisma.AttachmentUncheckedUpdateInput>;
};
export type AttachmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where: Prisma.AttachmentWhereUniqueInput;
};
export type AttachmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    limit?: number;
};
export type AttachmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
};
