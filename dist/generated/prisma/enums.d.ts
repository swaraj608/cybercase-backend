export declare const Role: {
    readonly CITIZEN: "CITIZEN";
    readonly OFFICER: "OFFICER";
    readonly SUPERVISOR: "SUPERVISOR";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const CaseStatus: {
    readonly REGISTERED: "REGISTERED";
    readonly VERIFICATION: "VERIFICATION";
    readonly ASSIGNED: "ASSIGNED";
    readonly UNDER_INVESTIGATION: "UNDER_INVESTIGATION";
    readonly ACTION_REQUIRED: "ACTION_REQUIRED";
    readonly ESCALATED: "ESCALATED";
    readonly TRANSFERRED: "TRANSFERRED";
    readonly RESOLVED: "RESOLVED";
    readonly CLOSED: "CLOSED";
};
export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus];
export declare const CasePriority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type CasePriority = (typeof CasePriority)[keyof typeof CasePriority];
