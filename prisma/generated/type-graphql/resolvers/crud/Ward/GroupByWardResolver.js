"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByWardArgs_1 = require("./args/GroupByWardArgs");
const Ward_1 = require("../../../models/Ward");
const WardGroupBy_1 = require("../../outputs/WardGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByWardResolver = class GroupByWardResolver {
    async groupByWard(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WardGroupBy_1.WardGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWardArgs_1.GroupByWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByWardResolver.prototype, "groupByWard", null);
GroupByWardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ward_1.Ward)
], GroupByWardResolver);
exports.GroupByWardResolver = GroupByWardResolver;
