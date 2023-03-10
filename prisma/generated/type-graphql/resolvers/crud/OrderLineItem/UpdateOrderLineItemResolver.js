"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOrderLineItemArgs_1 = require("./args/UpdateOrderLineItemArgs");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const helpers_1 = require("../../../helpers");
let UpdateOrderLineItemResolver = class UpdateOrderLineItemResolver {
    async updateOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOrderLineItemArgs_1.UpdateOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOrderLineItemResolver.prototype, "updateOrderLineItem", null);
UpdateOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], UpdateOrderLineItemResolver);
exports.UpdateOrderLineItemResolver = UpdateOrderLineItemResolver;
