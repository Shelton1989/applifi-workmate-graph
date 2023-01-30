"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstFeaturesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstFeaturesArgs_1 = require("./args/FindFirstFeaturesArgs");
const Features_1 = require("../../../models/Features");
const helpers_1 = require("../../../helpers");
let FindFirstFeaturesResolver = class FindFirstFeaturesResolver {
    async findFirstFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Features_1.Features, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFeaturesArgs_1.FindFirstFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstFeaturesResolver.prototype, "findFirstFeatures", null);
FindFirstFeaturesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Features_1.Features)
], FindFirstFeaturesResolver);
exports.FindFirstFeaturesResolver = FindFirstFeaturesResolver;
