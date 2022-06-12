export declare class UserMinAggregate {
    uid: string | null;
    id: string | null;
    username: string | null;
    email: string | null;
    role: "SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER" | null;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    coverImage: string | null;
    dateOfBirth: Date | null;
    hasAcceptedTerms: boolean | null;
    isFirstTimeUser: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
