"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFeaturesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByFeaturesArgs_1 = require("./args/GroupByFeaturesArgs");
const Features_1 = require("../../../models/Features");
const FeaturesGroupBy_1 = require("../../outputs/FeaturesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByFeaturesResolver = class GroupByFeaturesResolver {
    async groupByFeatures(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FeaturesGroupBy_1.FeaturesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFeaturesArgs_1.GroupByFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByFeaturesResolver.prototype, "groupByFeatures", null);
GroupByFeaturesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Features_1.Features)
], GroupByFeaturesResolver);
exports.GroupByFeaturesResolver = GroupByFeaturesResolver;
