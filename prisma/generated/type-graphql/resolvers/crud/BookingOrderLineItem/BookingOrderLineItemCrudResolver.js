"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBookingOrderLineItemArgs_1 = require("./args/AggregateBookingOrderLineItemArgs");
const CreateBookingOrderLineItemArgs_1 = require("./args/CreateBookingOrderLineItemArgs");
const CreateManyBookingOrderLineItemArgs_1 = require("./args/CreateManyBookingOrderLineItemArgs");
const DeleteBookingOrderLineItemArgs_1 = require("./args/DeleteBookingOrderLineItemArgs");
const DeleteManyBookingOrderLineItemArgs_1 = require("./args/DeleteManyBookingOrderLineItemArgs");
const FindFirstBookingOrderLineItemArgs_1 = require("./args/FindFirstBookingOrderLineItemArgs");
const FindManyBookingOrderLineItemArgs_1 = require("./args/FindManyBookingOrderLineItemArgs");
const FindUniqueBookingOrderLineItemArgs_1 = require("./args/FindUniqueBookingOrderLineItemArgs");
const GroupByBookingOrderLineItemArgs_1 = require("./args/GroupByBookingOrderLineItemArgs");
const UpdateBookingOrderLineItemArgs_1 = require("./args/UpdateBookingOrderLineItemArgs");
const UpdateManyBookingOrderLineItemArgs_1 = require("./args/UpdateManyBookingOrderLineItemArgs");
const UpsertBookingOrderLineItemArgs_1 = require("./args/UpsertBookingOrderLineItemArgs");
const helpers_1 = require("../../../helpers");
const BookingOrderLineItem_1 = require("../../../models/BookingOrderLineItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBookingOrderLineItem_1 = require("../../outputs/AggregateBookingOrderLineItem");
const BookingOrderLineItemGroupBy_1 = require("../../outputs/BookingOrderLineItemGroupBy");
let BookingOrderLineItemCrudResolver = class BookingOrderLineItemCrudResolver {
    async bookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bookingOrderLineItems(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateBookingOrderLineItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBookingOrderLineItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookingOrderLineItem_1.BookingOrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookingOrderLineItemArgs_1.FindUniqueBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "bookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookingOrderLineItem_1.BookingOrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookingOrderLineItemArgs_1.FindFirstBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "findFirstBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookingOrderLineItem_1.BookingOrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookingOrderLineItemArgs_1.FindManyBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "bookingOrderLineItems", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrderLineItem_1.BookingOrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateBookingOrderLineItemArgs_1.CreateBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "createBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBookingOrderLineItemArgs_1.CreateManyBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "createManyBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrderLineItem_1.BookingOrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteBookingOrderLineItemArgs_1.DeleteBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "deleteBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrderLineItem_1.BookingOrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateBookingOrderLineItemArgs_1.UpdateBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "updateBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBookingOrderLineItemArgs_1.DeleteManyBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "deleteManyBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBookingOrderLineItemArgs_1.UpdateManyBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "updateManyBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrderLineItem_1.BookingOrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertBookingOrderLineItemArgs_1.UpsertBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "upsertBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBookingOrderLineItem_1.AggregateBookingOrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookingOrderLineItemArgs_1.AggregateBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "aggregateBookingOrderLineItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookingOrderLineItemGroupBy_1.BookingOrderLineItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBookingOrderLineItemArgs_1.GroupByBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemCrudResolver.prototype, "groupByBookingOrderLineItem", null);
BookingOrderLineItemCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrderLineItem_1.BookingOrderLineItem)
], BookingOrderLineItemCrudResolver);
exports.BookingOrderLineItemCrudResolver = BookingOrderLineItemCrudResolver;
