export enum DBCollection {
    NEWARTICLES = "new-articles",
    NEWARTICLES_MC = "mc-questions",
    NEWARTICLES_SA = "sa-questions",
    NEWARTICLES_LA = "la-questions",

    USERS = "users",

    LICENSES = "licenses",
    LICENSE_RECORDS = "records",
}

export enum Role {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin",
    SYSTEM = "system",
    UNKNOWN = "unknown",
}

export enum ArticleType {
    FICTION = "fiction",
    NONFICTION = "nonfiction",
}

export enum ArticleCefrLevel {
    A1 = "A1",
    A2 = "A2",
    B1 = "B1",
    B2 = "B2",
    C1 = "C1",
    C2 = "C2",
}

export enum LicenseSubScriptionLevel {
    BASIC = "basic",
    PREMIUM = "premium",
    ENTERPRISE = "enterprise",
}
