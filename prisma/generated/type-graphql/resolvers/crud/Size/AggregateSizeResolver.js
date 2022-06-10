"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSizeArgs_1 = require("./args/AggregateSizeArgs");
const Size_1 = require("../../../models/Size");
const AggregateSize_1 = require("../../outputs/AggregateSize");
const helpers_1 = require("../../../helpers");
let AggregateSizeResolver = class AggregateSizeResolver {
    async aggregateSize(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).size.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSize_1.AggregateSize, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSizeArgs_1.AggregateSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSizeResolver.prototype, "aggregateSize", null);
AggregateSizeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], AggregateSizeResolver);
exports.AggregateSizeResolver = AggregateSizeResolver;
