"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstOrderLineItemArgs_1 = require("./args/FindFirstOrderLineItemArgs");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const helpers_1 = require("../../../helpers");
let FindFirstOrderLineItemResolver = class FindFirstOrderLineItemResolver {
    async findFirstOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrderLineItemArgs_1.FindFirstOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstOrderLineItemResolver.prototype, "findFirstOrderLineItem", null);
FindFirstOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], FindFirstOrderLineItemResolver);
exports.FindFirstOrderLineItemResolver = FindFirstOrderLineItemResolver;
