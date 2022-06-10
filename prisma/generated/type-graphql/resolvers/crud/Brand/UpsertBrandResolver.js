"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBrandResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertBrandArgs_1 = require("./args/UpsertBrandArgs");
const Brand_1 = require("../../../models/Brand");
const helpers_1 = require("../../../helpers");
let UpsertBrandResolver = class UpsertBrandResolver {
    async upsertBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brand_1.Brand, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertBrandArgs_1.UpsertBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertBrandResolver.prototype, "upsertBrand", null);
UpsertBrandResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brand_1.Brand)
], UpsertBrandResolver);
exports.UpsertBrandResolver = UpsertBrandResolver;
