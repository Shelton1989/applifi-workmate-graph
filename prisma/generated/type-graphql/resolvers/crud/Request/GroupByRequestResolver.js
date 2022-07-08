"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByRequestArgs_1 = require("./args/GroupByRequestArgs");
const Request_1 = require("../../../models/Request");
const RequestGroupBy_1 = require("../../outputs/RequestGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRequestResolver = class GroupByRequestResolver {
    async groupByRequest(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RequestGroupBy_1.RequestGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRequestArgs_1.GroupByRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRequestResolver.prototype, "groupByRequest", null);
GroupByRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Request_1.Request)
], GroupByRequestResolver);
exports.GroupByRequestResolver = GroupByRequestResolver;
