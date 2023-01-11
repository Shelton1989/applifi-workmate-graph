"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBookingOrderArgs_1 = require("./args/AggregateBookingOrderArgs");
const CreateBookingOrderArgs_1 = require("./args/CreateBookingOrderArgs");
const CreateManyBookingOrderArgs_1 = require("./args/CreateManyBookingOrderArgs");
const DeleteBookingOrderArgs_1 = require("./args/DeleteBookingOrderArgs");
const DeleteManyBookingOrderArgs_1 = require("./args/DeleteManyBookingOrderArgs");
const FindFirstBookingOrderArgs_1 = require("./args/FindFirstBookingOrderArgs");
const FindManyBookingOrderArgs_1 = require("./args/FindManyBookingOrderArgs");
const FindUniqueBookingOrderArgs_1 = require("./args/FindUniqueBookingOrderArgs");
const GroupByBookingOrderArgs_1 = require("./args/GroupByBookingOrderArgs");
const UpdateBookingOrderArgs_1 = require("./args/UpdateBookingOrderArgs");
const UpdateManyBookingOrderArgs_1 = require("./args/UpdateManyBookingOrderArgs");
const UpsertBookingOrderArgs_1 = require("./args/UpsertBookingOrderArgs");
const helpers_1 = require("../../../helpers");
const BookingOrder_1 = require("../../../models/BookingOrder");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBookingOrder_1 = require("../../outputs/AggregateBookingOrder");
const BookingOrderGroupBy_1 = require("../../outputs/BookingOrderGroupBy");
let BookingOrderCrudResolver = class BookingOrderCrudResolver {
    async bookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bookingOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertBookingOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateBookingOrder(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBookingOrder(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], BookingOrderCrudResolver.prototype, "bookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookingOrder_1.BookingOrder, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookingOrderArgs_1.FindFirstBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "findFirstBookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookingOrder_1.BookingOrder], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookingOrderArgs_1.FindManyBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "bookingOrders", null);
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
], BookingOrderCrudResolver.prototype, "createBookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBookingOrderArgs_1.CreateManyBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "createManyBookingOrder", null);
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
], BookingOrderCrudResolver.prototype, "deleteBookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrder_1.BookingOrder, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateBookingOrderArgs_1.UpdateBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "updateBookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBookingOrderArgs_1.DeleteManyBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "deleteManyBookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBookingOrderArgs_1.UpdateManyBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "updateManyBookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrder_1.BookingOrder, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertBookingOrderArgs_1.UpsertBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "upsertBookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBookingOrder_1.AggregateBookingOrder, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookingOrderArgs_1.AggregateBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "aggregateBookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookingOrderGroupBy_1.BookingOrderGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBookingOrderArgs_1.GroupByBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderCrudResolver.prototype, "groupByBookingOrder", null);
BookingOrderCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrder_1.BookingOrder)
], BookingOrderCrudResolver);
exports.BookingOrderCrudResolver = BookingOrderCrudResolver;
