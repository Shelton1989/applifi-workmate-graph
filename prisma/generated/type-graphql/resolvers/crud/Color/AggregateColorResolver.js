"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateColorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateColorArgs_1 = require("./args/AggregateColorArgs");
const Color_1 = require("../../../models/Color");
const AggregateColor_1 = require("../../outputs/AggregateColor");
const helpers_1 = require("../../../helpers");
let AggregateColorResolver = class AggregateColorResolver {
    async aggregateColor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).color.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateColor_1.AggregateColor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateColorArgs_1.AggregateColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateColorResolver.prototype, "aggregateColor", null);
AggregateColorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Color_1.Color)
], AggregateColorResolver);
exports.AggregateColorResolver = AggregateColorResolver;
