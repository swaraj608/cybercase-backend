"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasePriority = exports.CaseStatus = exports.Role = void 0;
exports.Role = {
    CITIZEN: 'CITIZEN',
    OFFICER: 'OFFICER',
    SUPERVISOR: 'SUPERVISOR',
    ADMIN: 'ADMIN'
};
exports.CaseStatus = {
    REGISTERED: 'REGISTERED',
    VERIFICATION: 'VERIFICATION',
    ASSIGNED: 'ASSIGNED',
    UNDER_INVESTIGATION: 'UNDER_INVESTIGATION',
    ACTION_REQUIRED: 'ACTION_REQUIRED',
    ESCALATED: 'ESCALATED',
    TRANSFERRED: 'TRANSFERRED',
    RESOLVED: 'RESOLVED',
    CLOSED: 'CLOSED'
};
exports.CasePriority = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL'
};
//# sourceMappingURL=enums.js.map