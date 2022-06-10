"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateBrandArgs_1 = require("./args/UpdateBrandArgs");
const Brand_1 = require("../../../models/Brand");
const helpers_1 = require("../../../helpers");
let UpdateBrandResolver = class UpdateBrandResolver {
    async updateBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateBrandArgs_1.UpdateBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateBrandResolver.prototype, "updateBrand", null);
UpdateBrandResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brand_1.Brand)
], UpdateBrandResolver);
exports.UpdateBrandResolver = UpdateBrandResolver;
