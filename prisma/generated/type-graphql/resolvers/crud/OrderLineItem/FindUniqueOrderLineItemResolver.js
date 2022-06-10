"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueOrderLineItemArgs_1 = require("./args/FindUniqueOrderLineItemArgs");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const helpers_1 = require("../../../helpers");
let FindUniqueOrderLineItemResolver = class FindUniqueOrderLineItemResolver {
    async orderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrderLineItemArgs_1.FindUniqueOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOrderLineItemResolver.prototype, "orderLineItem", null);
FindUniqueOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], FindUniqueOrderLineItemResolver);
exports.FindUniqueOrderLineItemResolver = FindUniqueOrderLineItemResolver;
