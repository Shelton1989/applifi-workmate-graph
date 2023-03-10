"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Location_1 = require("../../../models/Location");
const Tenant_1 = require("../../../models/Tenant");
const helpers_1 = require("../../../helpers");
let LocationRelationsResolver = class LocationRelationsResolver {
    async Tenant(location, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findUnique({
            where: {
                id: location.id,
            },
        }).Tenant({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tenant_1.Tenant, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Location_1.Location, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationRelationsResolver.prototype, "Tenant", null);
LocationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], LocationRelationsResolver);
exports.LocationRelationsResolver = LocationRelationsResolver;
