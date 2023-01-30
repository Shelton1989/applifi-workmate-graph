"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFeaturesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteFeaturesArgs_1 = require("./args/DeleteFeaturesArgs");
const Features_1 = require("../../../models/Features");
const helpers_1 = require("../../../helpers");
let DeleteFeaturesResolver = class DeleteFeaturesResolver {
    async deleteFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Features_1.Features, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteFeaturesArgs_1.DeleteFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteFeaturesResolver.prototype, "deleteFeatures", null);
DeleteFeaturesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Features_1.Features)
], DeleteFeaturesResolver);
exports.DeleteFeaturesResolver = DeleteFeaturesResolver;
