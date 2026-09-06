import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Officer: "Officer";
    readonly Case: "Case";
    readonly Assignment: "Assignment";
    readonly CaseHistory: "CaseHistory";
    readonly Notification: "Notification";
    readonly Attachment: "Attachment";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const OfficerScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly badgeNumber: "badgeNumber";
    readonly department: "department";
    readonly designation: "designation";
    readonly jurisdiction: "jurisdiction";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OfficerScalarFieldEnum = (typeof OfficerScalarFieldEnum)[keyof typeof OfficerScalarFieldEnum];
export declare const CaseScalarFieldEnum: {
    readonly id: "id";
    readonly caseNumber: "caseNumber";
    readonly citizenId: "citizenId";
    readonly assignedOfficerId: "assignedOfficerId";
    readonly category: "category";
    readonly description: "description";
    readonly district: "district";
    readonly priority: "priority";
    readonly currentStatus: "currentStatus";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly closedAt: "closedAt";
};
export type CaseScalarFieldEnum = (typeof CaseScalarFieldEnum)[keyof typeof CaseScalarFieldEnum];
export declare const AssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly caseId: "caseId";
    readonly officerId: "officerId";
    readonly assignedById: "assignedById";
    readonly assignedAt: "assignedAt";
    readonly unassignedAt: "unassignedAt";
    readonly reason: "reason";
};
export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum];
export declare const CaseHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly caseId: "caseId";
    readonly changedById: "changedById";
    readonly action: "action";
    readonly oldStatus: "oldStatus";
    readonly newStatus: "newStatus";
    readonly remarks: "remarks";
    readonly createdAt: "createdAt";
};
export type CaseHistoryScalarFieldEnum = (typeof CaseHistoryScalarFieldEnum)[keyof typeof CaseHistoryScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly caseId: "caseId";
    readonly message: "message";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const AttachmentScalarFieldEnum: {
    readonly id: "id";
    readonly caseId: "caseId";
    readonly uploadedById: "uploadedById";
    readonly fileName: "fileName";
    readonly objectKey: "objectKey";
    readonly contentType: "contentType";
    readonly fileSize: "fileSize";
    readonly createdAt: "createdAt";
};
export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly caseId: "caseId";
    readonly action: "action";
    readonly details: "details";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
