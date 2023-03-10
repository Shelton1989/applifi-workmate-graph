"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByOrderLineItemArgs_1 = require("./args/GroupByOrderLineItemArgs");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const OrderLineItemGroupBy_1 = require("../../outputs/OrderLineItemGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOrderLineItemResolver = class GroupByOrderLineItemResolver {
    async groupByOrderLineItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderLineItemGroupBy_1.OrderLineItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOrderLineItemArgs_1.GroupByOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOrderLineItemResolver.prototype, "groupByOrderLineItem", null);
GroupByOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], GroupByOrderLineItemResolver);
exports.GroupByOrderLineItemResolver = GroupByOrderLineItemResolver;
