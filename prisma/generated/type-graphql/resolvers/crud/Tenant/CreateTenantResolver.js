"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTenantResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateTenantArgs_1 = require("./args/CreateTenantArgs");
const Tenant_1 = require("../../../models/Tenant");
const helpers_1 = require("../../../helpers");
let CreateTenantResolver = class CreateTenantResolver {
    async createTenant(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tenant.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tenant_1.Tenant, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTenantArgs_1.CreateTenantArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateTenantResolver.prototype, "createTenant", null);
CreateTenantResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tenant_1.Tenant)
], CreateTenantResolver);
exports.CreateTenantResolver = CreateTenantResolver;
