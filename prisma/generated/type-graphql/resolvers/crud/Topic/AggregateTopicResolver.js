"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopicResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTopicArgs_1 = require("./args/AggregateTopicArgs");
const Topic_1 = require("../../../models/Topic");
const AggregateTopic_1 = require("../../outputs/AggregateTopic");
const helpers_1 = require("../../../helpers");
let AggregateTopicResolver = class AggregateTopicResolver {
    async aggregateTopic(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTopic_1.AggregateTopic, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTopicArgs_1.AggregateTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTopicResolver.prototype, "aggregateTopic", null);
AggregateTopicResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Topic_1.Topic)
], AggregateTopicResolver);
exports.AggregateTopicResolver = AggregateTopicResolver;
