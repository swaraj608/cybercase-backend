"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.AuditLogScalarFieldEnum = exports.AttachmentScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.CaseHistoryScalarFieldEnum = exports.AssignmentScalarFieldEnum = exports.CaseScalarFieldEnum = exports.OfficerScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Officer: 'Officer',
    Case: 'Case',
    Assignment: 'Assignment',
    CaseHistory: 'CaseHistory',
    Notification: 'Notification',
    Attachment: 'Attachment',
    AuditLog: 'AuditLog'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OfficerScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    badgeNumber: 'badgeNumber',
    department: 'department',
    designation: 'designation',
    jurisdiction: 'jurisdiction',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CaseScalarFieldEnum = {
    id: 'id',
    caseNumber: 'caseNumber',
    citizenId: 'citizenId',
    assignedOfficerId: 'assignedOfficerId',
    category: 'category',
    description: 'description',
    district: 'district',
    priority: 'priority',
    currentStatus: 'currentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    closedAt: 'closedAt'
};
exports.AssignmentScalarFieldEnum = {
    id: 'id',
    caseId: 'caseId',
    officerId: 'officerId',
    assignedById: 'assignedById',
    assignedAt: 'assignedAt',
    unassignedAt: 'unassignedAt',
    reason: 'reason'
};
exports.CaseHistoryScalarFieldEnum = {
    id: 'id',
    caseId: 'caseId',
    changedById: 'changedById',
    oldStatus: 'oldStatus',
    newStatus: 'newStatus',
    remarks: 'remarks',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    caseId: 'caseId',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.AttachmentScalarFieldEnum = {
    id: 'id',
    caseId: 'caseId',
    uploadedById: 'uploadedById',
    fileName: 'fileName',
    objectKey: 'objectKey',
    contentType: 'contentType',
    fileSize: 'fileSize',
    createdAt: 'createdAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    caseId: 'caseId',
    action: 'action',
    details: 'details',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map