"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookingOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteBookingOrderArgs_1 = require("./args/DeleteBookingOrderArgs");
const BookingOrder_1 = require("../../../models/BookingOrder");
const helpers_1 = require("../../../helpers");
let DeleteBookingOrderResolver = class DeleteBookingOrderResolver {
    async deleteBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrder_1.BookingOrder, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteBookingOrderArgs_1.DeleteBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteBookingOrderResolver.prototype, "deleteBookingOrder", null);
DeleteBookingOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrder_1.BookingOrder)
], DeleteBookingOrderResolver);
exports.DeleteBookingOrderResolver = DeleteBookingOrderResolver;
