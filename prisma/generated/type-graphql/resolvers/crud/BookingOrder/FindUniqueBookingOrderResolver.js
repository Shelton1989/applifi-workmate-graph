"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookingOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueBookingOrderArgs_1 = require("./args/FindUniqueBookingOrderArgs");
const BookingOrder_1 = require("../../../models/BookingOrder");
const helpers_1 = require("../../../helpers");
let FindUniqueBookingOrderResolver = class FindUniqueBookingOrderResolver {
    async bookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookingOrder_1.BookingOrder, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookingOrderArgs_1.FindUniqueBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBookingOrderResolver.prototype, "bookingOrder", null);
FindUniqueBookingOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrder_1.BookingOrder)
], FindUniqueBookingOrderResolver);
exports.FindUniqueBookingOrderResolver = FindUniqueBookingOrderResolver;
