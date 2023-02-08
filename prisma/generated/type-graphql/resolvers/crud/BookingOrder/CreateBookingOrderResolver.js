"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookingOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateBookingOrderArgs_1 = require("./args/CreateBookingOrderArgs");
const BookingOrder_1 = require("../../../models/BookingOrder");
const helpers_1 = require("../../../helpers");
let CreateBookingOrderResolver = class CreateBookingOrderResolver {
    async createBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrder_1.BookingOrder, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateBookingOrderArgs_1.CreateBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateBookingOrderResolver.prototype, "createBookingOrder", null);
CreateBookingOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrder_1.BookingOrder)
], CreateBookingOrderResolver);
exports.CreateBookingOrderResolver = CreateBookingOrderResolver;