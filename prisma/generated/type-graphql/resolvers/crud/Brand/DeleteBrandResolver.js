"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBrandResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteBrandArgs_1 = require("./args/DeleteBrandArgs");
const Brand_1 = require("../../../models/Brand");
const helpers_1 = require("../../../helpers");
let DeleteBrandResolver = class DeleteBrandResolver {
    async deleteBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brand_1.Brand, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteBrandArgs_1.DeleteBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteBrandResolver.prototype, "deleteBrand", null);
DeleteBrandResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brand_1.Brand)
], DeleteBrandResolver);
exports.DeleteBrandResolver = DeleteBrandResolver;
