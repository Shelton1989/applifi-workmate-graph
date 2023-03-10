"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOrderLineItemArgs_1 = require("./args/DeleteOrderLineItemArgs");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const helpers_1 = require("../../../helpers");
let DeleteOrderLineItemResolver = class DeleteOrderLineItemResolver {
    async deleteOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderLineItem_1.OrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOrderLineItemArgs_1.DeleteOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOrderLineItemResolver.prototype, "deleteOrderLineItem", null);
DeleteOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], DeleteOrderLineItemResolver);
exports.DeleteOrderLineItemResolver = DeleteOrderLineItemResolver;
