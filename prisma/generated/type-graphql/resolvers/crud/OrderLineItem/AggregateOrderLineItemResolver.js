"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOrderLineItemArgs_1 = require("./args/AggregateOrderLineItemArgs");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const AggregateOrderLineItem_1 = require("../../outputs/AggregateOrderLineItem");
const helpers_1 = require("../../../helpers");
let AggregateOrderLineItemResolver = class AggregateOrderLineItemResolver {
    async aggregateOrderLineItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrderLineItem_1.AggregateOrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOrderLineItemArgs_1.AggregateOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOrderLineItemResolver.prototype, "aggregateOrderLineItem", null);
AggregateOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], AggregateOrderLineItemResolver);
exports.AggregateOrderLineItemResolver = AggregateOrderLineItemResolver;
