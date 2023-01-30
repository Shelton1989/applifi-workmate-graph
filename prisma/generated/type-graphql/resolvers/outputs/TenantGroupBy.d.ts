import { TenantCountAggregate } from "../outputs/TenantCountAggregate";
import { TenantMaxAggregate } from "../outputs/TenantMaxAggregate";
import { TenantMinAggregate } from "../outputs/TenantMinAggregate";
export declare class TenantGroupBy {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    avatar: string | null;
    coverImage: string | null;
    experienceImages: string[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TenantCountAggregate | null;
    _min: TenantMinAggregate | null;
    _max: TenantMaxAggregate | null;
}
