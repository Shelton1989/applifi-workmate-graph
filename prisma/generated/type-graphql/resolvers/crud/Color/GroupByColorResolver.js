"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByColorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByColorArgs_1 = require("./args/GroupByColorArgs");
const Color_1 = require("../../../models/Color");
const ColorGroupBy_1 = require("../../outputs/ColorGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByColorResolver = class GroupByColorResolver {
    async groupByColor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ColorGroupBy_1.ColorGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByColorArgs_1.GroupByColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByColorResolver.prototype, "groupByColor", null);
GroupByColorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Color_1.Color)
], GroupByColorResolver);
exports.GroupByColorResolver = GroupByColorResolver;
